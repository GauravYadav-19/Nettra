import os
import requests

GITHUB_CLIENT_ID = os.getenv("GITHUB_CLIENT_ID")
GITHUB_CLIENT_SECRET = os.getenv("GITHUB_CLIENT_SECRET")


def exchange_code_for_token(code: str):
    token_url = "https://github.com/login/oauth/access_token"

    headers = {"Accept": "application/json"}
    data = {
        "client_id": GITHUB_CLIENT_ID,
        "client_secret": GITHUB_CLIENT_SECRET,
        "code": code,
    }

    res = requests.post(token_url, headers=headers, data=data)
    res.raise_for_status()

    return res.json().get("access_token")


def get_github_user(access_token: str):
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Accept": "application/vnd.github+json",
    }

    # 1️⃣ Get basic user info
    user_resp = requests.get("https://api.github.com/user", headers=headers)
    user_resp.raise_for_status()
    user = user_resp.json()

    # 2️⃣ Get user emails
    email_resp = requests.get("https://api.github.com/user/emails", headers=headers)

    if email_resp.status_code == 404:
        emails = []
    else:
        email_resp.raise_for_status()
        
    emails = email_resp.json()
    email_resp.raise_for_status()
    emails = email_resp.json()

    primary_email = None

    # ✅ SAFE parsing (this fixes your crash)
    if isinstance(emails, list):
        for e in emails:
            if isinstance(e, dict) and e.get("primary") and e.get("verified"):
                primary_email = e.get("email")
                break

    # Fallback (GitHub sometimes hides emails)
    if not primary_email:
        primary_email = user.get("email")

    if not primary_email:
        raise ValueError("GitHub email not available")

    return {
        "email": primary_email,
        "github_id": str(user.get("id")),
        "name": user.get("name") or user.get("login"),
        "avatar": user.get("avatar_url"),
    }