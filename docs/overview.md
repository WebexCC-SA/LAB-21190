# Overview

## Lab Summary

**Duration:** 120 minutes  
**Session ID:** LAB-21190  
**Title:** Building Custom Webex Contact Center Dashboards: Organization Visibility and Control with APIs

In this hands-on lab you will build a custom, real-time dashboard that provides full visibility and control over your Webex Contact Center environment. The dashboard code and logic are pre-built — your job is to connect it to the APIs by filling in endpoints and response payload keys using the **dashboard step forms**.

## Learning Objectives

By the end of this lab you will be able to:

- Authenticate with your admin bearer token from the Developer Portal profile
- Use the Users API to retrieve agent configuration (profiles, skills, teams)
- Pull organizational data (entry points, queues, global variables)
- Query historical and real-time reports using the GraphQL Search API
- Extend visibility with Webex Control Hub and Webex Calling APIs

## Prerequisites

- A Webex Contact Center organization with admin access
- Python 3.10+ installed locally
- A [Webex Developer Portal](https://developer.webex.com) account
- Basic familiarity with REST APIs and JSON

## How It Works

1. Complete the **Setup** module — paste your bearer token and organization ID from your Developer Portal profile.
2. Open each lab module tab and complete the **step forms** — paste endpoint paths and JSON field names from the Developer Portal.
3. Click **Save step** after each step. Answers are stored locally in `data/lab_answers.json` and survive page reloads.
4. As steps are completed, the progress bar updates and new dashboard sections unlock with live API data.

## Lab Workspace

Clone the lab dashboard project from GitHub:

<copy>https://github.com/git-jzuke/wx1-lab21190.git</copy>

Follow [Getting Started](getting_started.md) for environment setup, dashboard launch, and Setup module instructions.

## Disclaimer

Although the lab design and configuration examples could be used as a reference, for design-related questions please contact your representative at Cisco, or a Cisco partner.

## Lab Modules

| # | Module | Est. Time | Guide |
|---|--------|-----------|-------|
| 0 | Setup | 5 min | [Module 0](module0_setup.md) |
| 1 | Users | 25 min | [Module 1](module1_users.md) |
| 2 | Organizational Data | 25 min | [Module 2](module2_org_data.md) |
| 3 | GraphQL Reports | 30 min | [Module 3](module3_graphql.md) |
| 4 | Control Hub & Webex Calling | 25 min | [Module 4](module4_webex_apis.md) |
| — | Wrap-up & Q&A | 10 min | [Conclusion](conclusion.md) |
