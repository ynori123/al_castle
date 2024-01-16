from typing import List
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from src.model import Castle, CastleDistance
from fastapi import Depends
from src.database import get_db

def fetch_castles(db: Session) -> List[Castle]:
    castles = db.query(Castle).all()
    return castles

def fetch_specific_castles(db: Session, id: int) -> Castle:
    castle = db.query(Castle).filter_by(id=id).first()
    return castle

def fetch_current_route(db: Session, dep_id: int, arr_id: int) -> Result:
    current_route = db.query(CastleDistance).filter_by(castle_id_1=dep_id, arr_id=arr_id).first()
    return current_route

def travel(dep: str, arr: str, castles: List[int], db: Session = Depends(get_db)):
    route = []
    length = len(castles)
    if length >= 2:
        for i in range(1, len(castles)):
            route[i] = fetch_current_route(db=db, dep_id=castles[i-1], arr_id=castles[i])
            if route[i] is None:
                call_route_api(db=db, dep=dep, arr=arr)
    pass

def call_route_api(db: Session, dep: str, arr: str):
    pass
