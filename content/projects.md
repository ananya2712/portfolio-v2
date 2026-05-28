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
**Dow · The Data Mine**

- Developed a tool to predict the peroxide-forming proclivity of chemicals using a multi-stage machine-learning pipeline
- Collected and preprocessed data from 300+ chemicals
- Trained a multi-stage XGBoost model for accurate predictions
- Deployed the solution as a web application using R Shiny for a user-friendly interface
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
