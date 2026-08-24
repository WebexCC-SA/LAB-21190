# Module 1 — Users

**Answers:** dashboard step forms (Module 1)  
**Reference:** `modules/module1_users.py` (logic only — do not edit)  
**Estimated time:** 25 minutes

## Objective

Build the Users panel of the dashboard by progressively adding user data — from basic name/email through profiles, teams, and contact channel types.

Each step uses **list-all** APIs (paste the path exactly as shown in the Developer Portal Try It bar, e.g. `/organization/<org-id>/v2/team`).

## Developer Portal Reference

- [List Users](https://developer.webex.com/webex-contact-center/docs/api/v1/users/list-users)
- [List Desktop Profiles](https://developer.webex.com/webex-contact-center/docs/api/v1/desktop-profile/list-desktop-profiles)
- [List User Profiles](https://developer.webex.com/webex-contact-center/docs/api/v1/user-profiles/list-user-profiles)
- [List Skill Profiles](https://developer.webex.com/webex-contact-center/docs/api/v1/skill-profile/list-skill-profiles)
- [List Teams](https://developer.webex.com/webex-contact-center/docs/api/v1/team/list-teams)
- [List Multimedia Profiles](https://developer.webex.com/webex-contact-center/docs/api/v1/multimedia-profile/list-multimedia-profiles)

---

## Step 1.1 — List All Users

**Goal:** Display a table of all Contact Center users with basic info.

1. Open [List Users](https://developer.webex.com/webex-contact-center/docs/api/v1/users/list-users)
2. Copy the **endpoint path** from the Try It bar
3. Run Try It to confirm the response returns your user list

**Fill in:**

| Variable | Hint |
|----------|------|
| `USERS_LIST_ENDPOINT` | List path (e.g. `…/v2/user`) |

**Dashboard unlocks:** Users table with name columns

---

## Step 1.2 — Name and Email Fields

**Goal:** Add email addresses to the user table.

1. Expand a user object in the **List Users** Try It response
2. Copy the JSON keys for first name, last name, and email

**Fill in:**

| Variable | Hint |
|----------|------|
| `USER_FIRST_NAME_KEY` | Given name field |
| `USER_LAST_NAME_KEY` | Family name field |
| `USER_EMAIL_KEY` | Email field |

**Dashboard unlocks:** Email column in the users table

---

## Step 1.3 — Profile Information

**Goal:** Show profile IDs on each user and resolve agent/user profile names from list APIs.

1. On **List Users**, copy the three profile ID fields from a user object
2. On **List Desktop Profiles**, copy the list path and name field
3. On **List User Profiles**, copy the list path and name field

**Fill in:**

| Variable | Hint |
|----------|------|
| `AGENT_PROFILE_ID_KEY` | Agent profile UUID on user (List Users) |
| `MULTIMEDIA_PROFILE_ID_KEY` | Multimedia profile UUID on user |
| `USER_PROFILE_ID_KEY` | User profile UUID on user |
| `AGENT_PROFILE_LIST_ENDPOINT` | List Desktop Profiles path |
| `AGENT_PROFILE_NAME_KEY` | Name field on desktop profile objects |
| `USER_PROFILE_LIST_ENDPOINT` | List User Profiles path |
| `USER_PROFILE_NAME_KEY` | Name field on user profile objects |

**Dashboard unlocks:** Profile columns in the users table

---

## Step 1.4 — Skill Information

**Goal:** Associate skill profiles with users.

1. On **List Skill Profiles**, copy the list path, the profile `id` field, and the skill name field

**Fill in:**

| Variable | Hint |
|----------|------|
| `SKILL_PROFILE_LIST_ENDPOINT` | List path (e.g. `…/v2/skill-profile`) |
| `SKILL_PROFILE_ID_KEY` | ID property on each skill profile object |
| `SKILL_NAME_KEY` | Name field on skill profile objects |

**Dashboard unlocks:** Skill Profile column in the users table

---

## Step 1.5 — Team Information

**Goal:** Show team membership for each user.

1. On **List Teams**, copy the v2 list path and team name field
2. On **List Users**, copy the team IDs array on each user

**Fill in:**

| Variable | Hint |
|----------|------|
| `TEAM_LIST_ENDPOINT` | List path (e.g. `…/v2/team`) |
| `TEAM_IDS_KEY` | Team ID array on user |
| `TEAM_NAME_KEY` | Team name on team objects (e.g. `name`) |

**Dashboard unlocks:** Teams column in the users table

---

## Step 1.6 — Contact Channel Types

**Goal:** Show which contact channel types each user can handle.

1. Open **List Multimedia Profiles**
2. Copy the list path, name field, and channel capacity fields

**Fill in:**

| Variable | Hint |
|----------|------|
| `MULTIMEDIA_PROFILE_LIST_ENDPOINT` | List path (e.g. `…/v2/multimedia-profile`) |
| `MULTIMEDIA_PROFILE_NAME_KEY` | Name field on multimedia profile objects |
| `CHANNEL_TELEPHONY_KEY` | Telephony capacity field |
| `CHANNEL_CHAT_KEY` | Chat capacity field |
| `CHANNEL_EMAIL_KEY` | Email capacity field |
| `CHANNEL_SOCIAL_KEY` | Social capacity field |

**Dashboard unlocks:** Channel Types column (e.g. `telephony, chat, email`)

---

## Verification

- [ ] Users table displays with names and emails
- [ ] Profile and skill names resolve (not just UUIDs)
- [ ] Channel Types column lists supported contact channels per user
- [ ] Progress bar shows 6/6 steps for Module 1
