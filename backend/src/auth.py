import redis
from src.config import setting
from datetime import datetime, timedelta
import uuid
from hashlib import sha256


r = redis.Redis(
    host=setting.REDIS_HOST,
    port=setting.REDIS_PORT,
    password=setting.REDIS_PASSWORD,
    ssl=True
)


def set_token():
    token = (str(uuid.uuid4())).encode()
    now = datetime.now()
    now = f"{now.year}-{now.month}-{now.day} {now.hour}:{now.minute}:{now.second}"
    hashed_token = sha256(token).hexdigest()
    r.set(hashed_token, now)
    return token
