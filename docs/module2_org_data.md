# Module 2 — Organizational Data

## Objective

Add organizational visibility to the dashboard: entry points (channels), queues, teams, auxiliary codes, global variables, and the ability to update a global variable value.

---

## Step 2.1 — Entry Points (Channels)

**Goal:** Display all entry points with name, dialed number, flow, and queue configuration.

!!! note "Where does the DN live?"
    The dialed number (DN) is **not** on the entry point object itself. It is configured via the [Dial Number API](https://developer.webex.com/webex-contact-center/docs/api/v1/dial-number), which maps `dialledNumber` values to an `entryPointId`.

1. Open the [List Entry Points API](https://developer.webex.com/webex-contact-center/docs/api/v1/entry-point/list-entry-points)
2. Execute the API and inspect the response for name, `flowId`, and `active`
3. Open the [List Dial Number Mappings API](https://developer.webex.com/webex-contact-center/docs/api/v1/dial-number/list-dialed-number-mappings)
4. Find the field for the dialed number, entry point ID, **Webex Calling location**, and **media region** (`regionId`)

**Fill in:**

| Variable | Description |
|----------|-------------|
| `ENTRY_POINT_LIST_ENDPOINT` | List entry points path |
| `EP_NAME_KEY` | Entry point display name |
| `EP_FLOW_ID_KEY` | Flow ID on the entry point (join key) |
| `EP_ACTIVE_KEY` | Entry point active flag (`active`) |
| `DIAL_NUMBER_LIST_ENDPOINT` | List dial number mappings path |
| `DIAL_NUMBER_DN_KEY` | Dialed number field (note: `dialledNumber`) |
| `DIAL_NUMBER_EP_ID_KEY` | Entry point ID on the mapping object |
| `DIAL_NUMBER_LOCATION_KEY` | Webex Calling location id on the mapping (`location`) |
| `DIAL_NUMBER_REGION_KEY` | Media / telephony region id on the mapping (`regionId`) |

**Dashboard unlocks:** Entry Points / Channels table with DN / Address, Webex Calling Location, Media Region, Flow, and Status columns

!!! note "Flow names"
    The dashboard resolves `flowId` to a flow display name automatically using the Flow Store API — you do not need a separate lab step for List Flows.

!!! note "Location and media region source"
    Webex Calling **location** and **media region** are configured on the [Dial Number mapping](https://developer.webex.com/webex-contact-center/docs/api/v1/dial-number), not on the entry point object itself. The dashboard resolves the mapping's `location` and `regionId` values to **display names** using the [Webex Locations API](https://developer.webex.com/calling/docs/api/v1/locations/list-locations) and the WxCC [Telephony Region API](https://developer.webex.com/webex-contact-center/docs/api/v1/global-telephony-region/list-telephony-regions) (`GET /global/telephony-region?orgId={orgId}`). Non-telephony channels may show `—` for these columns.

---

## Step 2.2 — Queue Information

**Goal:** Display all contact service queues with direction, channel type, routing mode, and status.

1. Open the [List Contact Service Queues API](https://developer.webex.com/webex-contact-center/docs/api/v1/contact-service-queues/list-contact-service-queues)
2. Use the **v2 list** endpoint — `/organization/{orgId}/v2/contact-service-queue` or `/{orgId}/v2/contact-service-queue`. **Do not use v3.** The v3 queue list is being removed; when you develop against WxCC APIs, copy the v2 Try It path.
3. Inspect fields for contact direction, channel type, routing type, and active flag

**Fill in:**

| Variable | Description |
|----------|-------------|
| `QUEUE_LIST_ENDPOINT` | List queues path (`v2/contact-service-queue`) |
| `QUEUE_NAME_KEY` | Queue display name |
| `QUEUE_ID_KEY` | Queue unique identifier |
| `QUEUE_CONTACT_DIRECTION_KEY` | Contact direction (Queue Type — inbound/outbound) |
| `QUEUE_TYPE_KEY` | Queue channel type (Channel Type) |
| `QUEUE_ROUTING_TYPE_KEY` | Routing type (Queue Routing Type) |
| `QUEUE_STATUS_KEY` | Active flag on each queue |

**Dashboard unlocks:** Queues table with Name, Contact Direction, Type, Skills Based Routing, and Status columns

---

## Step 2.3 — Team Details

**Goal:** Display all contact center teams with site, type, dialed number (when applicable), and status.

1. Open the [List Teams API](https://developer.webex.com/webex-contact-center/docs/api/v1/team/list-teams)
2. Use the **v2 list teams** endpoint — it returns teams in a `data` array and includes `dialedNumber` for **capacity-based** teams
3. Note fields for team name, site name, team type, and dialed number

**Fill in:**

| Variable | Description |
|----------|-------------|
| `TEAM_LIST_ENDPOINT` | List teams path (`v2/team`) |
| `TEAM_NAME_KEY` | Team display name |
| `TEAM_SITE_NAME_KEY` | Site name where the team is located |
| `TEAM_TYPE_KEY` | Team type (`AGENT` or `CAPACITY`) |
| `TEAM_DN_KEY` | Dialed number for capacity-based teams (`dialedNumber`) |

**Dashboard unlocks:** Teams table with Team Name, Site, Type, DN, and Status columns

!!! note "Dialed number applicability"
    `dialedNumber` applies to **capacity-based** teams (for example voice mailboxes). Agent-based teams do not use a team DN — the dashboard shows `—` for those rows.

---

## Step 2.4 — Auxiliary Codes

**Goal:** Display auxiliary (idle) codes used for agent state management.

1. Open the [List Auxiliary Codes API](https://developer.webex.com/webex-contact-center/docs/api/v1/auxiliary-code/list-auxiliary-codes)
2. Use the **v2 list** endpoint (`/v2/auxiliary-code`)
3. Note fields for Work Type Code, Default Code, and Active flag

**Fill in:**

| Variable | Description |
|----------|-------------|
| `AUX_CODE_LIST_ENDPOINT` | List auxiliary codes path (`v2/auxiliary-code`) |
| `AUX_CODE_NAME_KEY` | Code display name |
| `AUX_CODE_ID_KEY` | Code unique identifier |
| `AUX_CODE_TYPE_KEY` | Work Type Code |
| `AUX_CODE_DEFAULT_KEY` | Default Code flag |
| `AUX_CODE_STATUS_KEY` | Active flag |

**Dashboard unlocks:** Auxiliary Codes table with Name, Code Type, Default, and Status columns

---

## Step 2.5 — Global Variables

**Goal:** Display organization-wide global variables.

!!! note "CAD Variables API"
    Global variables are exposed via the **CAD Variable** API (`v2/cad-variable`), not `/global-variable`. The configured default is in `defaultValue`, not `value`.

1. Open the [List Global Variables API](https://developer.webex.com/webex-contact-center/docs/api/v1/global-variables/list-global-variables)
2. Inspect the response for name, default value, variable type, and status fields

**Fill in:**

| Variable | Description |
|----------|-------------|
| `GLOBAL_VARIABLE_LIST_ENDPOINT` | List global variables path (`v2/cad-variable`) |
| `GV_NAME_KEY` | Variable name |
| `GV_VALUE_KEY` | Default value field (`defaultValue`) |
| `GV_TYPE_KEY` | Variable type (`variableType`) |
| `GV_STATUS_KEY` | Variable status field (`active`) |
| `GV_RESPONSE_DATA_KEY` | Response wrapper key |

**Dashboard unlocks:** Global Variables table with Name, Value, Type, and Status columns

---

## Step 2.6 — Update Global Variable Value

**Goal:** Update a global variable's default value from the dashboard.

!!! note "GET before PUT"
    The update API requires the **full variable object** in the PUT body. The dashboard performs a GET first, replaces `defaultValue`, then sends PUT.

1. Open the [Update Specific Global Variable by ID](https://developer.webex.com/webex-contact-center/docs/api/v1/global-variables/update-specific-global-variable-by-id) API
2. Note the path pattern uses `cad-variable/{id}` (not the v2 list path)
3. Confirm your token includes **`cjp:config_write`** scope

**Fill in:**

| Variable | Description |
|----------|-------------|
| `GV_UPDATE_ENDPOINT` | Update path with `{org_id}` and `{variable_id}` placeholders |
| `GV_REQUEST_METHOD` | HTTP method for the update operation (PUT) |

The dashboard uses built-in defaults for the variable Id and Default Value body field — you only need the endpoint and request method.

**Dashboard unlocks:** Blue **Edit** buttons appear when you hover a global variable row. The edit dialog includes an **i** button that explains the GET-then-PUT CadVariableDTO flow. The form shows the writable Update-by-ID fields for its `variableType` (string, integer, decimal, boolean, or date/time), plus description, desktop label, and the required flags (`active`, `reportable`, `agentViewable`, `agentEditable`). Name and type cannot be changed. After save, the table refreshes without reloading all of Module 2.

!!! warning "Lab safety"
    Update a **test variable** you create for the lab. Avoid changing production or system-defined variables unless your instructor directs you to.

---

## Developer Portal Reference

- [List Entry Points](https://developer.webex.com/webex-contact-center/docs/api/v1/entry-point/list-entry-points)
- [List Dial Number Mappings](https://developer.webex.com/webex-contact-center/docs/api/v1/dial-number/list-dialed-number-mappings)
- [Flow Orchestration](https://developer.webex.com/webex-contact-center/docs/api/guides/flow-orchestration)
- [List Locations](https://developer.webex.com/calling/docs/api/v1/locations/list-locations)
- [List Telephony Regions](https://developer.webex.com/webex-contact-center/docs/api/v1/global-telephony-region/list-telephony-regions)
- [List Contact Service Queues](https://developer.webex.com/webex-contact-center/docs/api/v1/contact-service-queues/list-contact-service-queues)
- [List Teams](https://developer.webex.com/webex-contact-center/docs/api/v1/team/list-teams)
- [List Auxiliary Codes](https://developer.webex.com/webex-contact-center/docs/api/v1/auxiliary-code/list-auxiliary-codes)
- [List Global Variables](https://developer.webex.com/webex-contact-center/docs/api/v1/global-variables/list-global-variables)
- [Get Specific Global Variable by ID](https://developer.webex.com/webex-contact-center/docs/api/v1/global-variables/get-specific-global-variable-by-id)
- [Update Specific Global Variable by ID](https://developer.webex.com/webex-contact-center/docs/api/v1/global-variables/update-specific-global-variable-by-id)
