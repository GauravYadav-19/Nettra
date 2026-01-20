# app/services/google_oauth.py

import os
from google.oauth2 import id_token
from google.auth.transport import requests

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
print("🔍 ENV GOOGLE_CLIENT_ID =", repr(GOOGLE_CLIENT_ID))
def verify_google_token(token: str):
    try:
        # Step 1: Verify signature & issuer ONLY
        idinfo = id_token.verify_token(
            token,
            requests.Request(),
        )

        # Step 2: Manual issuer check
        if idinfo["iss"] not in [
            "accounts.google.com",
            "https://accounts.google.com",
        ]:
            raise ValueError("Wrong issuer")

        # Step 3: Manual audience check
        aud = idinfo.get("aud")
        azp = idinfo.get("azp")

        if aud != GOOGLE_CLIENT_ID and azp != GOOGLE_CLIENT_ID:
            raise ValueError(
                f"Audience mismatch: aud={aud}, azp={azp}"
            )

        return idinfo

    except Exception as e:
        print("🔥 Google verification error:", str(e))
        return None
    