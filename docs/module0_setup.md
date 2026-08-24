# Module 0 — Lab Setup

Connect the dashboard to your Webex Contact Center organization using your **admin profile** credentials from the Developer Portal.

## What you will do

1. Sign in to [developer.webex.com](https://developer.webex.com) as a WxCC admin.
2. Open your **profile menu** and copy your **bearer token**.
3. Copy your **organization ID** from the same profile menu and verify connectivity.

Credentials are saved locally in `data/lab_credentials.json` (gitignored).

## Step 0.1 — Bearer token

1. Go to [developer.webex.com](https://developer.webex.com) and sign in with your Webex Contact Center admin account.
2. Click your **profile** (avatar or name) in the top-right corner.
3. Copy the **bearer token** from your profile.
4. Paste it into the dashboard (token string only — do not include `Bearer`).

## Step 0.2 — Organization ID

1. From the same profile menu, copy your **organization ID**.
2. Paste it into the dashboard and click **Check & save step**.

The lab verifies the token and org ID by calling the WxCC List Users API.

## After setup

When both steps are complete, Modules 1–4 unlock and live API data loads as you progress.

Use **Reset module** on the Setup tab to clear credentials and start over.

## Alternative: `.env` file

You can still pre-configure `WEBEX_BEARER_TOKEN` and `WEBEX_ORG_ID` in `.env`. Dashboard setup overrides `.env` once saved.

Run `python scripts/check_token.py` to probe connectivity from the command line.
