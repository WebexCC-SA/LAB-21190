# Overview

## Lab Summary

**Duration:** 120 minutes  
**Session ID:** LAB-21190  
**Title:** Building Custom Webex Contact Center Dashboards: Organization Visibility and Control with APIs

In this hands-on lab you will connect a pre-built dashboard to Webex Contact Center and Webex Platform APIs. The code and layout are already in place — your job is to fill in endpoints and response field names using the **dashboard step forms**.

The lab environment (code, virtual environment, and dashboard server) is **already set up**. Open **http://127.0.0.1:5000** if the dashboard is not already in the browser, then start with [Module 0 — Lab Setup](module0_setup.md).

## Learning Objectives

By the end of this lab you will be able to:

- Authenticate with an admin profile token or a Webex Integration
- Use the Users API to retrieve agent configuration (profiles, skills, teams)
- Pull organizational data (entry points, queues, global variables)
- Query historical and real-time reports using the GraphQL Search API
- Extend visibility with Webex Control Hub and Webex Calling APIs
- Review completed modules together in a Full Dashboard

## Prerequisites

- A GitHub account
- Visual Studio Code (VS Code)
- A Webex Contact Center organization with admin access
- A [Webex Developer Portal](https://developer.webex.com) account
- Basic familiarity with REST APIs and JSON

## How It Works

1. Complete **Setup** — paste an admin profile token **or** create a Webex Integration, then save your organization ID.
2. Open each lab module tab and complete the **step forms** — paste endpoint paths and JSON field names from the Developer Portal.
3. Click **Save step** after each step. Answers are stored locally in `data/lab_answers.json` and survive page reloads.
4. As steps are completed, the progress bar updates and new dashboard sections unlock with live API data.
5. Use **Open Full Dashboard** to review completed sections on a separate page.

## How to complete each lab step

1. Open the **API reference** link for the step.
2. Copy the **endpoint path** (when shown) and paste it into the form.
3. Copy the **JSON field names** from the API response and paste them into the response key fields.
4. Click **Save step**.

## Lab Modules

| # | Module | Guide |
|---|--------|-------|
| 0 | Setup | [Module 0](module0_setup.md) |
| 1 | Users | [Module 1](module1_users.md) |
| 2 | Organizational Data | [Module 2](module2_org_data.md) |
| 3 | GraphQL Reports | [Module 3](module3_graphql.md) |
| 4 | Control Hub & Webex Calling | [Module 4](module4_webex_apis.md) |
| 5 | Full Dashboard | [Module 5](module5_dashboard.md) |
| — | Wrap-up | [Conclusion](conclusion.md) |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 401 Unauthorized | Verify the access token is valid and not expired. Re-run **Setup** steps 0.1–0.2 (admin token or a new integration authorization code). Copy a fresh token from your Developer Portal profile (paste the token only, not `Bearer`). |
| 403 Forbidden | Confirm you are signed in with a Webex Contact Center **admin** account. If you used an integration, confirm the required scopes were granted. |
| Empty data returned | Confirm org ID is correct for your region. |
| Progress not updating | Click **Save step** after filling in fields, or hard-refresh the browser. |
| Region mismatch | Ask your instructor — API base URLs are preconfigured on the lab workstation. |

## Disclaimer

Although the lab design and configuration examples could be used as a reference, for design-related questions please contact your representative at Cisco, or a Cisco partner.
