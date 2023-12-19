from pydantic import (
    BaseSettings,
)
import os

class Setting(BaseSettings):
    DATABASE_URL = os.environ.get('DATABASE_URL')
    
