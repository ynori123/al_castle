from typing import List
from sqlalchemy.orm import Session
from sqlalchemy.engine import Result
from src.model import Castle
from fastapi import Depends
from src.database import get_db

def get_castles(db: Session = Depends(get_db)) -> List[Castle]:
    castles = db.query(Castle).all()
    return castles
