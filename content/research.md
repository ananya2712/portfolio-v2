---
title: research
subtitle: thesis · publications
---

::terminal-prompt{cmd="ls -la ./research"}
::

total 3
- `thesis.md` &nbsp;&nbsp;&nbsp;data-valuation for ML data-quality repair · ongoing
- `ccce23.md` &nbsp;&nbsp;interpretable hybrid recommender · CCCE'23, Stockholm
- `isda22.md` &nbsp;&nbsp;RePI: research-paper impact analysis · ISDA'22

::terminal-prompt{cmd="cat thesis.md"}
::

::terminal-callout{id="thesis" label="m.s. thesis · in progress" tone="note"}
**Responsible Data Science (RDS) Lab, Purdue University** · Aug 2024 – Present
*Advised by Dr. Romila Pradhan*

Thesis work on the role of data-valuation techniques in detecting and repairing data-quality issues in ML pipelines. Key questions I'm investigating:

- Can data-valuation methods identify erroneous training points?
- Can correcting highly-valued data points improve pipeline accuracy and fairness?
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
