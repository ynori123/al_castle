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
