from typing import ClassVar
from pydantic_settings import (
    BaseSettings,
)
import os

class Setting(BaseSettings):
    DATABASE_URL: ClassVar[str] = os.environ.get('DATABASE_URL')
    GOOGLE_MAP_API_KEY: ClassVar[str] = os.environ.get('GOOGLE_MAP_API_KEY')

setting = Setting()
