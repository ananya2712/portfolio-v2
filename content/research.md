---
title: research
subtitle: thesis · publications
---

::terminal-prompt{cmd="ls -la ./research"}
::

total 3
- `thesis.md` &nbsp;&nbsp;&nbsp;data valuation for label error detection in ML pipelines · ongoing
- `ccce23.md` &nbsp;&nbsp;interpretable hybrid recommender · CCCE'23, Stockholm
- `isda22.md` &nbsp;&nbsp;RePI: research-paper impact analysis · ISDA'22

::terminal-prompt{cmd="cat thesis.md"}
::

::terminal-callout{id="thesis" label="m.s. thesis · in progress" tone="note"}
**Data Valuation for Label Error Detection in ML Pipelines**
*Responsible Data Science (RDS) Lab, Purdue University · Aug 2024 – Present*
*Advised by Dr. Romila Pradhan*

Developing **Shapley-value-based data-valuation methods** to detect and repair mislabeled training data in ML pipelines, with a focus on improving model **fairness, reliability, and explainability**.
::

::terminal-prompt{cmd="cat ccce23.md"}
::

::terminal-callout{id="ccce23" label="ccce'23 · stockholm" tone="info"}
**An Interpretable Hybrid Recommender Based on Graph Convolution to Address Serendipity**
*Published at CCCE'23 · Stockholm, March 2023* — [Springer link](https://link.springer.com/chapter/10.1007/978-3-031-27440-4_20)

Two novel contributions built on top of a 4-model hybrid graph-convolutional recommender:

- A new **distance-based metric** for quantifying recommendation serendipity, going beyond standard diversity/novelty proxies
- **KNN feature-importance analysis** layered on the hybrid to make its recommendations interpretable to end users
::

::terminal-prompt{cmd="cat isda22.md"}
::

::terminal-callout{id="isda22" label="isda'22" tone="info"}
**RePI: Research Paper Impact Analysis**
*Published at ISDA'22 · December 2022* — [Springer link](https://link.springer.com/chapter/10.1007/978-3-031-35299-7_3)

A web application for analyzing research-paper impact, built around a novel **impact-factor ratio** — a new metric for publication influence that goes beyond raw citation counts.

- Implemented the metric and pipeline in Python on top of the Semantic Scholar API
- Built an interactive interface in Streamlit for exploring per-paper and per-author impact
::

::terminal-prompt{cmd="exit"}
::
