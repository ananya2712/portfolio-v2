---
title: projects
subtitle: ml pipelines · streaming · big data
---

::terminal-prompt{cmd="ls -la ./projects"}
::

total 2
- `peroxide-ml.md` &nbsp;&nbsp;multi-stage XGBoost for chemical safety · Dow + The Data Mine
- `tweet-sent.md` &nbsp;&nbsp;&nbsp;tweet sentiment with Spark Streaming · big data project

::terminal-prompt{cmd="cat peroxide-ml.md"}
::

::terminal-callout{id="peroxide-ml" label="time-sensitive chemical identification tool" tone="info"}
**Dow · The Data Mine (TDM 511)**

- Worked with corporate mentors to develop a **multi-stage XGBoost model** predicting chemical peroxide formation, using feature engineering on ionic charges and molecular weights paired with systematic feature selection
- Collected and preprocessed data on 300+ chemicals
- Deployed the model as a web application in R Shiny for non-technical users
::

::terminal-prompt{cmd="cat tweet-sent.md"}
::

::terminal-callout{id="tweet-sent" label="tweet sentiment analysis · spark + hadoop" tone="info"}
**Big Data Project**

- Conducted sentiment analysis on streaming tweets using Spark Streaming and PySpark
- Trained multiple machine-learning models (Logistic Regression, Naive Bayes, SVM) for sentiment classification
- Implemented K-means clustering for data segmentation
- Optimized model performance through hyperparameter tuning and cross-validation
::

::terminal-prompt{cmd="exit"}
::
