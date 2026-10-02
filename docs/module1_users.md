# Module 1 — Users

## Objective

Build the Users panel of the dashboard by progressively adding user data — from basic name/email through profiles, teams, and contact channel types.

Each step uses **list-all** APIs (paste the path exactly as shown in the Developer Portal Try It bar, e.g. `/organization/<org-id>/v2/team`).

---

## Step 1.1 — List All Users

**Goal:** Display a table of all Contact Center users with basic info.

1. Open the [List Users API](https://developer.webex.com/webex-contact-center/docs/api/v1/users/list-users)
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

1. Open the [List Users API](https://developer.webex.com/webex-contact-center/docs/api/v1/users/list-users)
2. Expand a user object in the Try It response
3. Copy the JSON keys for first name, last name, and email

**Fill in:**

| Variable | Hint |
|----------|------|
| `USER_FIRST_NAME_KEY` | Given name field |
| `USER_LAST_NAME_KEY` | Family name field |
| `USER_EMAIL_KEY` | Email field |

**Dashboard unlocks:** Email column in the users table

---

## Step 1.3 — Profile Information

**Goal:** Show profile IDs on each user and resolve agent, user, and multimedia profile names from list APIs.

1. Open the [List Users API](https://developer.webex.com/webex-contact-center/docs/api/v1/users/list-users) and copy the three profile ID fields from a user object
2. Open the [List Desktop Profiles API](https://developer.webex.com/webex-contact-center/docs/api/v1/desktop-profile/list-desktop-profiles) and copy the list path and name field
3. Open the [List User Profiles API](https://developer.webex.com/webex-contact-center/docs/api/v1/user-profiles/list-user-profiles) and copy the list path and name field
4. Open the [List Multimedia Profiles API](https://developer.webex.com/webex-contact-center/docs/api/v1/multimedia-profile/list-multimedia-profiles) and copy the list path and name field

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
| `MULTIMEDIA_PROFILE_LIST_ENDPOINT` | List Multimedia Profiles path |
| `MULTIMEDIA_PROFILE_NAME_KEY` | Name field on multimedia profile objects |

**Dashboard unlocks:** Agent, multimedia, and user profile name columns

---

## Step 1.4 — Skill Information

**Goal:** Associate skill profiles with users.

1. Open the [List Skill Profiles API](https://developer.webex.com/webex-contact-center/docs/api/v1/skill-profile/list-skill-profiles)
2. Copy the list path, the profile `id` field, and the skill name field

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

1. Open the [List Teams API](https://developer.webex.com/webex-contact-center/docs/api/v1/team/list-teams)
2. Copy the v2 list path and team name field
3. Open the [List Users API](https://developer.webex.com/webex-contact-center/docs/api/v1/users/list-users) and copy the team IDs array on each user

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

1. Open the [List Multimedia Profiles API](https://developer.webex.com/webex-contact-center/docs/api/v1/multimedia-profile/list-multimedia-profiles) (you already copied the list path in step 1.3)
2. Copy the channel capacity fields

**Fill in:**

| Variable | Hint |
|----------|------|
| `CHANNEL_TELEPHONY_KEY` | Telephony capacity field |
| `CHANNEL_CHAT_KEY` | Chat capacity field |
| `CHANNEL_EMAIL_KEY` | Email capacity field |
| `CHANNEL_SOCIAL_KEY` | Social capacity field |

**Dashboard unlocks:** Channel Types column (e.g. `telephony, chat, email`)

---

## Developer Portal Reference

- [List Users](https://developer.webex.com/webex-contact-center/docs/api/v1/users/list-users)
- [List Desktop Profiles](https://developer.webex.com/webex-contact-center/docs/api/v1/desktop-profile/list-desktop-profiles)
- [List User Profiles](https://developer.webex.com/webex-contact-center/docs/api/v1/user-profiles/list-user-profiles)
- [List Skill Profiles](https://developer.webex.com/webex-contact-center/docs/api/v1/skill-profile/list-skill-profiles)
- [List Teams](https://developer.webex.com/webex-contact-center/docs/api/v1/team/list-teams)
- [List Multimedia Profiles](https://developer.webex.com/webex-contact-center/docs/api/v1/multimedia-profile/list-multimedia-profiles)
