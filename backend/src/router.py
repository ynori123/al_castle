from fastapi import (
    APIRouter,
    Depends,
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
    fetch_castles,
    fetch_specific_castles
)
from src.database import get_db
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/ping")
async def ping():
    return {"ping" : "pong"}

@router.get("/castles", response_model=List[ResponseCastle])
async def get_castles(db: Session = Depends(get_db)) -> List[Castle]:
    return fetch_castles(db=db)

@router.get("/castles/{id}", response_model=ResponseCastle)
async def get_castle(id: int, db: Session = Depends(get_db)) -> Castle:
    return fetch_specific_castles(id=id, db=db)

@router.post("/travel")
async def travel(data: RequestTravel):
    pass
