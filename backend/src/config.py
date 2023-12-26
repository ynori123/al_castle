from typing import ClassVar
from pydantic_settings import (
    BaseSettings,
)
import os

class Setting(BaseSettings):
    DATABASE_URL: ClassVar[str] = os.environ.get('DATABASE_URL')

setting = Setting()
