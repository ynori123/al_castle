from fastapi import (
    APIRouter,
)
from typing import List
from src.schema import (
    ResponseCastle,
    RequestCastle,
    ResponseTravel,
    RequestTravel
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
async def ping():
    return {"ping" : "pong"}

@router.get("/castles", response_model=List[ResponseCastle])
async def get_castles() -> List[Castle]:
    return get_castles()

@router.get("/castles/{id}", response_model=ResponseCastle)
async def get_castle(id: int) -> Castle:
    return get_castle(id)

@router.post("/travel")
async def travel(data: RequestTravel):
    pass
