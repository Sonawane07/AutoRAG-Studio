import secrets
import string
from datetime import datetime

def new_id(prefix: str) -> str:
    token = ''.join(secrets.choice(string.ascii_lowercase + string.digits) for _ in range(10))
    return f"{prefix}_{token}"

def new_api_key() -> str:
    return "sk_" + secrets.token_urlsafe(24)

def utc_now():
    return datetime.utcnow()
