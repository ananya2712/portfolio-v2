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
*Presented in Stockholm, Sweden · March 2023*

A novel approach combining graph convolutional networks with traditional recommendation methods to enhance serendipity.

- Developed a 4-model hybrid architecture integrating graph convolutional networks
- Formulated a new distance-based metric for measuring recommendation serendipity
- Enhanced interpretability through KNN feature-importance analysis
- Improved recommendation diversity while maintaining accuracy
::

::terminal-prompt{cmd="cat isda22.md"}
::

::terminal-callout{id="isda22" label="isda'22" tone="info"}
**RePI: Research Paper Impact Analysis**
*Presented December 2022*

A web application for analyzing research-paper impact using advanced metrics and visualization.

- Built an intuitive web interface with Python + Streamlit
- Integrated with the Semantic Scholar API for comprehensive paper analysis
- Developed a novel impact-factor ratio for measuring publication influence
- Implemented interactive visualizations for impact metrics
::

::terminal-prompt{cmd="exit"}
::
