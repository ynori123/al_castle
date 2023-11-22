from fastapi import (
    APIRouter,
    Depends
)
from typing import List
from src.schema import (
    ResponseCastle
)
from src.model import (
    Castle
)
from src.crud import (
    get_castles
)
from src.database import get_db
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/ping")
def ping():
    return {"ping" : "pong"}

@router.get("/castles", response_model=List[ResponseCastle])
def get_castles() -> List[Castle]:
    return get_castles()
