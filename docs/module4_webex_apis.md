# Module 4 — Webex Control Hub & Webex Calling APIs

**Answers:** dashboard step forms (Module 4)  
**Reference:** `modules/module4_webex_apis.py` (logic only — do not edit)  
**Estimated time:** 20 minutes

## Objective

Extend the dashboard beyond Contact Center by integrating Webex Platform APIs for people, calling locations, and PSTN/carrier/trunk configuration.

## Developer Portal Reference

- [List People](https://developer.webex.com/docs/api/v1/people/list-people)
- [List Roles](https://developer.webex.com/docs/api/v1/roles/list-roles)
- [List Licenses](https://developer.webex.com/docs/api/v1/licenses/list-licenses)
- [List Locations](https://developer.webex.com/calling/docs/api/v1/locations/list-locations)
- [Get Phone Numbers](https://developer.webex.com/calling/docs/api/v1/numbers/get-phone-numbers-for-an-organization-with-given-criteria)
- [Get PSTN Connection](https://developer.webex.com/calling/docs/api/v1/pstn/retrieve-pstn-connection-for-a-location)

---

## Step 4.1 — Control Hub User Information

**Goal:** Enrich the user list from Module 1 with Webex Platform people data (display name, roles, licenses, status).

Each part in the dashboard links directly to the matching Developer Portal page.

### Part A — List People

1. Open [List People](https://developer.webex.com/docs/api/v1/people/list-people)
2. This uses the Webex Platform API base URL (`https://webexapis.com/v1`), not the WxCC org API
3. Copy the endpoint path and field names for email, display name, status, roles, and licenses

### Part B — List Roles

1. Open [List Roles](https://developer.webex.com/docs/api/v1/roles/list-roles)
2. Copy the endpoint path — role id/name keys are standard and handled by the lab

### Part C — List Licenses

1. Open [List Licenses](https://developer.webex.com/docs/api/v1/licenses/list-licenses)
2. Copy the endpoint path

**Fill in:**

| Variable | Description |
|----------|-------------|
| `WEBEX_PEOPLE_ENDPOINT` | Path for listing people |
| `PEOPLE_EMAIL_KEY` | Field for email address |
| `PEOPLE_DISPLAY_NAME_KEY` | Field for display name |
| `PEOPLE_STATUS_KEY` | Field for account status |
| `PEOPLE_ROLES_KEY` | Role ID list on the person object |
| `PEOPLE_LICENSES_KEY` | License ID list on the person object |
| `WEBEX_ROLES_ENDPOINT` | Path for listing organization roles |
| `WEBEX_LICENSES_ENDPOINT` | Path for listing organization licenses |

**Dashboard unlocks:** Control Hub People table with Display Name, Email, Role Name, License Names, and Status columns

---

## Step 4.2 — Webex Calling Location Data

**Goal:** Display Webex Calling locations with country, provisioned number count, and address.

### Part A — List Locations

1. Open [List Locations](https://developer.webex.com/calling/docs/api/v1/locations/list-locations)
2. Copy name, id, and the nested **address** object field name

### Part B — List Phone Numbers

1. Open [Get Phone Numbers](https://developer.webex.com/calling/docs/api/v1/numbers/get-phone-numbers-for-an-organization-with-given-criteria)
2. Copy the endpoint path and phone number field to count **provisioned numbers** per location

**Fill in:**

| Variable | Description |
|----------|-------------|
| `WEBEX_LOCATION_ENDPOINT` | Path for listing locations |
| `LOCATION_NAME_KEY` | Field for location name |
| `LOCATION_ID_KEY` | Field for location ID |
| `LOCATION_ADDRESS_KEY` | Nested address object on the location |
| `WEBEX_PHONE_NUMBERS_ENDPOINT` | List phone numbers path |
| `PHONE_NUMBER_KEY` | Phone number field on each record |

**Dashboard unlocks:** Webex Calling Locations table with Location, Country, Provisioned Numbers, and Address columns

---

## Step 4.3 — PSTN / Carrier for Entry Point Numbers

**Goal:** Show PSTN connection and carrier details for **telephony numbers assigned to Module 2 entry points** (via dial-number mappings).

1. Complete Module 2 Step 2.1 so entry point DNs are available
2. Open [Retrieve PSTN Connection](https://developer.webex.com/calling/docs/api/v1/pstn/retrieve-pstn-connection-for-a-location)
3. Copy the endpoint path (with a location id placeholder)
4. Phone numbers from step 4.2 are reused automatically

**Fill in:**

| Variable | Description |
|----------|-------------|
| `PSTN_CONNECTION_ENDPOINT` | PSTN connection path with `{location_id}` placeholder |

**Dashboard unlocks:** PSTN table for Module 2 entry point numbers with Entry Point, Number, Location, Connection / Carrier, and Country columns

!!! note "Which numbers appear?"
    Only **PSTN telephony numbers** that are both mapped to a Module 2 entry point **and** present in the Webex Calling phone number inventory are listed. Chat, email, and SMS entry points are excluded.

---

## Verification

- [ ] People table shows display name, role name, license names, and status
- [ ] Locations table shows country, provisioned numbers, and address
- [ ] PSTN table shows entry point numbers with location, connection/carrier, and country
- [ ] Progress bar shows 3/3 steps for Module 4
- [ ] Overall lab progress shows 100%

## Congratulations!

You have built a fully functional custom Webex Contact Center dashboard that integrates:

- User and organizational configuration APIs
- GraphQL historical and real-time reporting
- Webex Control Hub and Webex Calling visibility

Consider extending the dashboard with:

- Alerting when queue wait times exceed thresholds
- Webhook or notification API integration for faster event-driven updates (this lab uses polling instead)
