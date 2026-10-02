# Module 3 — GraphQL for Historical and Real-Time Reports

## Objective

Use the Webex Contact Center GraphQL Search API to answer business questions about contacts and agents, then keep a live agent-state table current with the Activities API.

Queries use the **organization ID from Setup** (`orgId` on Search and Activities). They work for any org your bearer token can access — nothing is hardcoded to a sample tenant.

## Data Dictionaries (field names)

Use the official sample data dictionaries when picking GraphQL field names. You may enter the **full dictionary path** (e.g. `activities.nodes.queueName`) or the **leaf name** (e.g. `queueName`).

| Report | Dictionary |
|--------|------------|
| CSR | [CSR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CSR.md) |
| CAR | [CAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CAR.md) |
| ASR | [ASR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/ASR.md) |
| AAR | [AAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/AAR.md) |

---

## Step 3.1 — CSR: contact volume, termination, and direction

**Business case:** How many customer sessions occurred in the last 30 days, on which channels, how did they end, and were they inbound or outbound?

1. Open the [Search API](https://developer.webex.com/webex-contact-center/docs/api/v1/search/search)
2. Open the [CSR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CSR.md)

**Fill in:** CSR report type plus Id, Channel Type, Termination Type, and Direction from the CSR dictionary.

**Dashboard unlocks:** CSR card with volume, channel mix, termination-type mix, and inbound/outbound mix. Use the **i** button for the GraphQL query and how the counts are generated.

---

## Step 3.2 — CAR: where contacts were routed

**Business case:** Which queues and activities did customer contacts pass through?

1. Open the [Search API](https://developer.webex.com/webex-contact-center/docs/api/v1/search/search)
2. Open the [CAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CAR.md)

**Fill in:** CAR report type plus Activity Name and Queue Name.

**Dashboard unlocks:** **More customer details** (click an Interaction ID to view CAR events). There is no CAR summary card.

---

## Step 3.3 — ASR: agent sessions by team

**Business case:** Which agents were in session, and which teams do they belong to?

1. Open the [Search API](https://developer.webex.com/webex-contact-center/docs/api/v1/search/search)
2. Open the [ASR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/ASR.md)

**Fill in:** ASR report type plus Agent Id, Agent Name, and Team Name.

**Dashboard unlocks:** ASR card with total logged-in time, unique-agent count, and team breakdown.

---

## Step 3.4 — AAR: time in agent states

**Business case:** How was agent time spent (state and duration)?

1. Open the [Search API](https://developer.webex.com/webex-contact-center/docs/api/v1/search/search)
2. Open the [AAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/AAR.md)

**Fill in:** AAR report type plus State and Duration.

**Dashboard unlocks:** **More agent details**. There is no AAR summary card.

---

## Step 3.5 — Real-time agent states

**Business case:** Who is logged in right now, and what are they doing?

1. Open the [Search API](https://developer.webex.com/webex-contact-center/docs/api/v1/search/search)
2. Open the [Get Agent Activities API](https://developer.webex.com/webex-contact-center/docs/api/v1/agents/get-agent-activities)
3. GraphQL `agentSession` filtered to `isActive: true` lists logged-in agents for **your** org ID.
4. **GET `/v1/agents/activities`** (telephony, last 23 hours, `orgId` + those agent IDs) updates current state, idle code, duration, and interaction ID.

**Fill in:** Is Active and Agent Id from the ASR dictionary.

**Dashboard unlocks:** Real-time table (polls every 10 seconds). The **i** button shows the GraphQL document and the Activities GET.

---

## Developer Portal Reference

- [Getting Started with Search API](https://developer.webex.com/webex-contact-center/docs/getting-started-with-search-api)
- [Search API Reference](https://developer.webex.com/webex-contact-center/docs/api/v1/search/search)
- [Get Agent Activities](https://developer.webex.com/webex-contact-center/docs/api/v1/agents/get-agent-activities)
- [CSR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CSR.md)
- [CAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/CAR.md)
- [ASR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/ASR.md)
- [AAR Data Dictionary](https://github.com/WebexSamples/webex-contact-center-api-samples/blob/main/reporting-samples/graphql-sample/DataDictionary/AAR.md)
- [GraphQL Samples on GitHub](https://github.com/WebexSamples/webex-contact-center-api-samples/tree/main/reporting-samples/graphql-sample)
