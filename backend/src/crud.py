from typing import List
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from src.model import Castle
from fastapi import Depends
from src.database import get_db

def fetch_castles(db: Session) -> List[Castle]:
    castles = db.query(Castle).all()
    return castles

def fetch_specific_castles(db: Session, id: int) -> Castle:
    castle = db.query(Castle).filter_by(id=id).first()
    return castle

