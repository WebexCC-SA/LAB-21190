# Module 3 — GraphQL for Historical and Real-Time Reports

**Answers:** dashboard step forms (Module 3)  
**Reference:** `modules/module3_graphql.py` (logic only — do not edit)  
**Estimated time:** 25 minutes

## Objective

Use the Webex Contact Center GraphQL Search API to query historical task and agent data, then build a real-time agent state view.

## Developer Portal Reference

- [Getting Started with Search API](https://developer.webex.com/webex-contact-center/docs/getting-started-with-search-api)
- [Search API Reference](https://developer.webex.com/webex-contact-center/docs/api/v1/search/search)
- [GraphQL Samples on GitHub](https://github.com/WebexSamples/webex-contact-center-api-samples/tree/main/reporting-samples/graphql-sample)

## Data Dictionaries (field names)

Use the official sample data dictionaries when picking GraphQL field names. You may enter the **full dictionary path** (e.g. `activities.nodes.queueName`) or the **leaf name** (e.g. `queueName`) as long as it appears in the matching dictionary.

| Report | Dictionary |
|--------|------------|
| CSR | [CSR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CSR.md) |
| CAR | [CAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CAR.md) |
| ASR | [ASR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/ASR.md) |
| AAR | [AAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/AAR.md) |

## Record Types

| Abbreviation | Full Name | Query Root | Filter Type |
|-------------|-----------|------------|-------------|
| CSR | Customer Session Records | `taskDetails` | `filter` |
| CAR | Customer Activity Records | `taskDetails` | `extFilter` |
| ASR | Agent Session Records | `agentSession` | `filter` |
| AAR | Agent Activity Records | `agentSession` | `extFilter` |
| RT | Real-Time (recent ASR) | `agentSession` | `filter` (5-min window) |

---

## Step 3.2 — CSR Report (Customer Session Records)

**Goal:** Query task session records from the last 30 days using fields from the [CSR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CSR.md).

**Fill in:**

| Variable | Description |
|----------|-------------|
| `CSR_RECORD_TYPE` | Report Type (three-letter code) |
| `CSR_TASK_ID_KEY` | Id field from CSR dictionary |
| `CSR_CHANNEL_TYPE_KEY` | Channel Type field from CSR dictionary |
| `CSR_STATUS_KEY` | Status field from CSR dictionary |

**Dashboard unlocks:** CSR report card with record count

---

## Step 3.3 — CAR Report (Customer Activity Records)

**Goal:** Query customer activity records from `tasks.activities.nodes` using the [CAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CAR.md).

| Variable | Description |
|----------|-------------|
| `CAR_RECORD_TYPE` | Report Type (three-letter code) |
| `CAR_ACTIVITY_NAME_KEY` | Activity Name from CAR dictionary |
| `CAR_QUEUE_NAME_KEY` | Queue Name from CAR dictionary |

**Dashboard unlocks:** CAR report card and **More customer details** button

---

## Step 3.4 — ASR Report (Agent Session Records)

**Goal:** Query agent session records using the [ASR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/ASR.md).

| Variable | Description |
|----------|-------------|
| `ASR_RECORD_TYPE` | Report Type (three-letter code) |
| `ASR_AGENT_ID_KEY` | Agent Id from ASR dictionary |
| `ASR_AGENT_NAME_KEY` | Agent Name from ASR dictionary |
| `ASR_TEAM_NAME_KEY` | Team Name from ASR dictionary |

**Dashboard unlocks:** ASR report card

---

## Step 3.5 — AAR Report (Agent Activity Records)

**Goal:** Query agent activity records from `agentSessions.channelInfo.activities.nodes` using the [AAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/AAR.md).

| Variable | Description |
|----------|-------------|
| `AAR_RECORD_TYPE` | Report Type (three-letter code) |
| `AAR_ACTIVITY_TYPE_KEY` | State field from AAR dictionary |
| `AAR_DURATION_KEY` | Duration field from AAR dictionary |

**Dashboard unlocks:** AAR report card and **More agent details** button

---

## Step 3.6 — Real-Time Agent States

**Goal:** Query active agent sessions using fields from the ASR Data Dictionary.

| Variable | Description |
|----------|-------------|
| `RT_AGENT_STATE_KEY` | Is Active from ASR dictionary |
| `RT_AGENT_ID_KEY` | Agent Id from ASR dictionary |

**Dashboard unlocks:** Real-Time Agent States table with live polling

---

## Verification

- [ ] CSR, CAR, ASR, AAR report cards show record counts (30-day window)
- [ ] More customer details shows CSR rows; Interaction ID opens CAR events
- [ ] More agent details shows ASR rows; Agent Session ID opens AAR events
- [ ] Real-time agent table shows logged-in agents with states
- [ ] Progress bar shows 6/6 steps for Module 3
