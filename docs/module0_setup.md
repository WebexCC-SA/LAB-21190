# Module 0 — Lab Setup

Connect the dashboard to your Webex Contact Center organization. Complete step **0.1** with either an **admin profile token** or a **Webex Integration**, then save your **organization ID** in step **0.2**.

Credentials are saved locally in `data/lab_credentials.json` (gitignored). The lab never stores a client secret, authorization code, or refresh token.

## What you will do

1. Sign in to [developer.webex.com](https://developer.webex.com) as a WxCC admin.
2. Provide an access token using one of the options in step 0.1.
3. Copy your **organization ID** and verify connectivity.

## Step 0.1 — Access token

Choose **Admin token** or **Integration (advanced)**. Either option completes this step.

### Option A — Admin token

1. Go to [developer.webex.com](https://developer.webex.com) and sign in with your Webex Contact Center admin account.
2. Click your **profile** (avatar or name) in the top-right corner.
3. Copy the **bearer token** from your profile.
4. Paste it into the dashboard (token string only — do not include `Bearer`).

### Option B — Webex Integration (advanced)

Use this when you want an OAuth integration instead of a personal profile token.

1. Create an integration at [My Webex Apps](https://developer.webex.com/my-apps/new).
2. Set the **Redirect URI** to the callback URL shown in Setup (for this lab this is `http://127.0.0.1:5000/setup/callback`). It must match exactly — `127.0.0.1` and `localhost` are different.
3. Add these scopes (check each one — `spark:kms` is not in the list; Webex adds it automatically):

   - `cjp:config` — Contact Center configuration APIs
   - `cjp:config_read` — Read users, queues, teams, and other org data
   - `cjp:config_write` — Update global variables (Module 2)
   - `spark:people_read` — Identify the authorizing admin and organization
   - `spark-admin:people_read` — List Control Hub people (Module 4)
   - `spark-admin:roles_read` — Resolve role names (Module 4)
   - `spark-admin:licenses_read` — Resolve license names (Module 4)
   - `spark-admin:telephony_config_read` — Locations and phone numbers (Module 4)
   - `spark-admin:telephony_pstn_read` — PSTN connection per location (Module 4 step 4.3)

4. On the integration page, copy the **OAuth Authorization URL** (it already includes the scopes you checked, plus `spark:kms`). Paste it into the lab. Client ID fills in from that URL.
5. Click **Authorize in Webex** and sign in as a Contact Center **admin**. Do not generate a token yet.
6. After you approve, the lab callback page shows a one-time **authorization code**.
7. Paste **Client Secret** and the **authorization code**, then click **Generate token**.

Order matters: authorize (admin login) first, then generate the token.

The lab calls `POST https://webexapis.com/v1/access_token` and stores only the resulting access token. The token response includes the scopes that were actually granted; if any required scope is missing, Setup does **not** complete step 0.1. Edit the integration, check the highlighted chips, copy the new **OAuth Authorization URL**, authorize again, and generate a new token (the previous code cannot be reused).

## Step 0.2 — Organization ID

1. From the Developer Portal profile menu, copy your **organization ID** (Setup may pre-fill it from the token).
2. Paste it into the dashboard and click **Check & save step**.

The lab verifies the token and org ID by calling the WxCC List Users API.

!!! note "Reset Setup to start over"
    Use **Reset module** on the Setup tab if you need to start over or connect a **different organization**. This clears the saved token and org ID so you can enter new credentials.

## After setup

The **Connected** card includes an **i** button that explains whether you used an admin profile token or a Webex Integration.

When both steps are complete, Modules 1–4 unlock and live API data loads as you progress.

## Developer Portal Reference

- [Webex Developer Portal](https://developer.webex.com)
- [My Webex Apps](https://developer.webex.com/my-apps)
- [Create a New App](https://developer.webex.com/my-apps/new)
- [List Users](https://developer.webex.com/webex-contact-center/docs/api/v1/users/list-users) (connectivity check)
