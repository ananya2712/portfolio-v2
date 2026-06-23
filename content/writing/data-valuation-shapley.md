---
title: "data valuation for debugging ml pipelines"
subtitle: "what Shapley values can (and can't) tell you about bad data"
date: "2026-06-23"
tags:
  - data-valuation
  - shapley
  - ml-pipelines
  - fairness
---

Garbage in, garbage out is true. But not all garbage is equally guilty. Here's how I used Shapley-based data valuation to debug ML pipelines for accuracy and fairness.

## Motivation

Most data debugging looks at the trained model. You poke at predictions after the fact with tools like SHAP or LIME, and try to explain why the model did what it did. That's useful, but it skips a step.

If a model is unfair or inaccurate, the cause is often upstream, in the training data. Mislabeled examples. Outliers. Missing values that cluster around one demographic group instead of being spread randomly. Debugging only at the model level also misses errors introduced earlier, during imputation, scaling, or encoding, before the classifier ever sees the data.

My core idea: don't treat the training set as fixed. Score every training point by how much it actually contributes to model accuracy or fairness, looking at the whole pipeline, not just the final model. Rank points by that score. Fix or remove the worst ones. Then check whether that actually beats fixing things at random.

## Why Shapley values, and why the naive version doesn't scale

The Shapley value comes from game theory. It's a way to split credit among players based on their average contribution across every possible team they could be on. Applied here, each training point is a "player," and the "game" is model performance.

The problem: computing this exactly means testing every possible subset of the training data. That number explodes fast, so it's only feasible for tiny datasets.

DataScope, the framework I used, makes this practical for real pipelines. In short, it:

- Approximates the model with a nearest-neighbor classifier, which makes the math tractable
- Reuses global steps like scalers and imputers across calculations instead of refitting them constantly
- Uses some clever data-structure tricks to avoid recomputing the same things over and over

The result is a method reported to run orders of magnitude faster than brute-force approaches, while still ranking data points well for cleaning. That speed is what makes it usable in practice instead of just a thought experiment.

## How I set things up

**Pipelines.** I tested two different pipeline setups, since a method that only works on one model type isn't proven to generalize:

- **Pipeline A**: a standard scikit-learn-style flow, impute, transform, scale, then logistic regression.
- **Pipeline B**: impute, scale, reduce dimensions with PCA, select the best features, then a random forest.

**Datasets.** Four classic benchmark datasets: Adult Income, German Credit, Titanic, and COMPAS. Each has a different protected attribute (sex or race) and a different size, from under a thousand rows to tens of thousands. Using more than one dataset matters, since a result that only shows up once is weak evidence.

**Noise types.** I corrupted the training data in three different ways, never touching the test set:

- **Biased label noise**: flipping labels, but only within one demographic group, to mimic a biased labeler rather than random error.
- **Biased missing data**: blanking out feature values, again targeted at one group, to mimic data that's systematically harder to collect for some people.
- **Outliers**: pushing a feature value to an extreme, implausible number for a random slice of rows.

**Comparison.** For each noise type, I ranked the suspicious points three ways: by importance score (DataScope), by model uncertainty (entropy), and randomly as a control. Then I cleaned the top-ranked points, retrained, and measured what happened.

**What I measured.** Accuracy, plus two fairness metrics (demographic parity + equalised odds): whether the model treats both groups equally in who gets a positive prediction, and whether it makes the same error rates across groups. Tracking fairness alongside accuracy was the whole point. A method that fixes accuracy but quietly leaves bias untouched isn't actually solving the problem.

## What I found

**Breaking things confirmed the scores were measuring something real.** Before trying to clean anything, I tested the reverse: deliberately corrupting the highest-scoring points. If the scores meant anything, this should hurt the model far more than corrupting random points. It did, by a wide margin. Corrupting the same number of low-importance points barely moved accuracy. That gap is the strongest evidence that the scores track real influence on the model.

**Targeted cleaning recovered accuracy fast.** After injecting label noise, cleaning the highest-scoring points recovered most of the lost accuracy, consistently across multiple runs. Cleaning by uncertainty recovered some, but noticeably less. Random cleaning barely helped at all. If you can only review a limited number of points, which ones you pick matters a lot.

**But for outliers, the fancy method lost to a simple rule.** When the noise was extreme, out-of-range feature values, capping the importance-ranked points barely moved accuracy, and didn't improve steadily as I cleaned more. A basic statistical rule (flag anything beyond two standard deviations from the mean) did better, and even beat the original, uncorrupted baseline.

My read: importance scoring answers "which points change the model's behavior the most." That's the right question for subtle label errors, where nothing about the data looks obviously wrong. It's the wrong question for outliers, where the data already looks wrong on its face, and a simple statistical check catches it just fine. The lesson isn't that one method is better. It's that the right tool depends on what kind of problem you're actually solving.

## What this doesn't show

- Everything here is binary classification. I haven't yet tested whether this holds for multi-class problems or regression.
- DataScope's scores are themselves an approximation, not the true Shapley value. I compared methods against each other, not against a perfect ground truth.
- I only checked two fairness metrics. Other notions of fairness, or cases involving more than one protected group at once, aren't covered.
- The datasets are old and have known issues. I'd trust the relative pattern between methods more than I'd trust any of this generalizing directly to a modern, real-world dataset.

## Where this leaves things

The takeaway isn't "DataScope wins" or "simple rules win." It's that the right tool depends on the kind of noise you're dealing with. Importance scoring earns its cost on subtle errors that nothing simpler can catch. Cheap statistical rules are hard to beat when the problem is just a number sitting somewhere it shouldn't be. Treating data valuation as a universal fix is the assumption this idea pushes back on hardest.

Happy to share the code and results if you want to dig into the details or try this on a different dataset. I also have a Python package and example scripts along with all methods dropping soon :)
