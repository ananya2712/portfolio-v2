---
title: projects
subtitle: llm agents · security osint · ml pipelines
---

::terminal-prompt{cmd="cat agent-orchestrator.md"}
::

::terminal-callout{id="agent-orchestrator" title="Agent Orchestrator" org="Tool-calling LLM agent" dates="2026" location="Personal project" link="https://github.com/ananya2712/agent-orchestrator" tone="info" tags="python, openai responses api, llm agents, tool routing, prompt caching, evals"}
- Built a chat agent that answers requests across **191 tools in 7 services** (Gmail, Google Calendar, Google Drive, Slack, Linear, GitHub, Perplexity), backed by in-process mocks for reproducible runs
- Designed a **router-first architecture**: one structured LLM call over a 3.4K-token tool index picks ≤ 12 tools per turn, cutting input to **~10K tokens per turn vs. ~144K** with every schema sent at every step
- Constrained router output to an `enum` of real tool names and auto-added companion lookups, reaching a **92% prompt-cache hit rate** and a **~4.3 s median turn**
- Wrote a framework-free bounded agent loop with hard limits on steps, tool calls, timeouts and a 90 s deadline, plus structured error codes so the model can self-correct
- Evaluated with 43 dry-run tests and a **92-scenario live matrix (88/92 passing)** covering disambiguation, multi-step tasks and overlapping services; the agent ignored **7/7 planted prompt-injection attacks**
::

::terminal-prompt{cmd="cat crypto-scam-hunt.md"}
::

::terminal-callout{id="crypto-scam-hunt" title="Crypto Investment Scam Hunting" org="OSINT + scraping" dates="Spring 2026" location="CNIT 555: Social Engineering Mitigation · Purdue · Team of 4" tone="info" tags="python, urlscan.io api, osint, web scraping, cron, threat intel"}
- Hunted live crypto investment scam sites over four sprints and reported **35 websites and 150+ validated wallets**; about 20 reported sites were taken down
- Built a Python scraper that mined threat-intel feeds and urlscan.io for exposed `getCoinList` config files, extracted wallet addresses, and filtered out template wallets before reporting
- Automated collection and API submission on a 12-hour cron job; when it produced false positives (non-investment scams and invalid SOL wallets), we shut it down and moved to verified manual reporting
- Ran all investigation in isolated VMs behind a VPN, using temporary emails, phone numbers and personas to safely navigate account-gated scam sites
::

::terminal-prompt{cmd="cat peroxide-ml.md"}
::

::terminal-callout{id="peroxide-ml" title="Time-Sensitive Chemical Identification Tool" org="Dow · The Data Mine" location="TDM 511 · corporate partner project" tone="info" tags="xgboost, feature engineering, r shiny"}
- Worked with corporate mentors to develop a **multi-stage XGBoost model** predicting chemical peroxide formation, using feature engineering on ionic charges and molecular weights paired with systematic feature selection
- Collected and preprocessed data on **300+ chemicals**
- Deployed the model as a web application in R Shiny for non-technical users
::

::terminal-prompt{cmd="cat tweet-sent.md"}
::

::terminal-callout{id="tweet-sent" title="Tweet Sentiment Analysis" org="Big data project" tone="info" tags="pyspark, spark streaming, hadoop, logistic regression, naive bayes, svm, k-means"}
- Conducted sentiment analysis on streaming tweets using Spark Streaming and PySpark
- Trained multiple machine-learning models (Logistic Regression, Naive Bayes, SVM) for sentiment classification
- Implemented K-means clustering for data segmentation
- Optimized model performance through hyperparameter tuning and cross-validation
::

::terminal-prompt{cmd="exit"}
::
