---
title: research
subtitle: thesis · publications
---

::terminal-prompt{cmd="cat thesis.md"}
::

::terminal-callout{id="thesis" title="Data Valuation Techniques to Detect and Repair Data Quality Issues in ML Pipelines" org="M.S. Thesis" dates="Aug 2024 – Aug 2026" location="Responsible Data Science (RDS) Lab, Purdue · Chair: Dr. Romila Pradhan" link="https://github.com/ananya2712/label_cleaner" tone="note" tags="python, scikit-learn, datascope, shapley values, cleanlab, data valuation, fairness"}
Studied how corrupted training data cascades through end-to-end ML pipelines, and whether data-valuation methods can find those points reliably enough to guide targeted repair.

- Built **label_cleaner**, a modular benchmark that injects **label flips, subgroup-targeted label noise (NNAR) and subgroup-targeted missingness (MNAR)**, then compares Shapley-based valuation over the full pipeline (**DataScope**) and entropy-based uncertainty against a random-ordering baseline that cleans the same rows
- Ran **36 configurations** across 3 datasets (Adult, German Credit, Titanic), 2 pipeline architectures and 2 corruption rates, tracking accuracy and demographic parity at every 5% of the cleaning budget
- Validated the rankings with a control study on clean data first: corrupting DataScope's top-ranked points cost **5.2–8.4 pp of accuracy**, so the rankings find points the model truly depends on
- Repair beat the corrupted baseline in **26 of 36 configurations** and in **all 12 NNAR** configurations, with gains of up to **8.9 pp**
- Showed that **no single method dominates**: entropy matched DataScope on all 24 label-noise configurations but was the worst method in 10 of 12 feature-space ones
- Found that DataScope's value lies in its *ordering* at partial budgets (about 10–30% of the data): at full cleaning it matched random ordering in all 36 configurations, and the choice of correction action (restore a label vs. remove a row) mattered as much as the detection method
::

::terminal-prompt{cmd="cat ccce23.md"}
::

::terminal-callout{id="ccce23" title="An Interpretable Hybrid Recommender Based on Graph Convolution to Address Serendipity" org="CCCE'23" dates="Mar 2023" location="Published · Stockholm, Sweden" link="https://link.springer.com/chapter/10.1007/978-3-031-27440-4_20" tone="info" tags="graph convolution, recommender systems, knn, interpretability"}
Two novel contributions built on top of a 4-model hybrid graph-convolutional recommender:

- A new **distance-based metric** for quantifying recommendation serendipity, going beyond standard diversity/novelty proxies
- **KNN feature-importance analysis** layered on the hybrid to make its recommendations interpretable to end users
::

::terminal-prompt{cmd="cat isda22.md"}
::

::terminal-callout{id="isda22" title="RePI: Research Paper Impact Analysis" org="ISDA'22" dates="Dec 2022" location="Published" link="https://link.springer.com/chapter/10.1007/978-3-031-35299-7_3" tone="info" tags="python, semantic scholar api, streamlit"}
A web application for analyzing research-paper impact, built around a novel **impact-factor ratio** — a new metric for publication influence that goes beyond raw citation counts.

- Implemented the metric and pipeline in Python on top of the Semantic Scholar API
- Built an interactive interface in Streamlit for exploring per-paper and per-author impact
::

::terminal-prompt{cmd="exit"}
::
