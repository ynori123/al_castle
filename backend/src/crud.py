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
