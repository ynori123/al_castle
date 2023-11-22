from src.database import Base
from sqlalchemy import (
    Column, 
    Integer, 
    String, 
    Text, 
    Double,
    ForeignKey,
    DateTime
)
from sqlalchemy.orm import (
    relationship
)

class Castle(Base):
    __tablename__ = "castles"
    id = Column(Integer, primary_key=True, unique=True, autoincrement=True, nullable=False)
    name = Column(String(128), nullable=False)
    summary = Column(Text(512), nullable=False)
    url = Column(String(256), nullable=True)
    lat = Column(Double(7, False, 5), nullable=False)
    lng = Column(Double(8, False, 5), nullable=False)

    restaurants = relationship("Restaurant", backref="castle")

class Restaurant(Base):
    __tablename__ = "restaurants"
    id = Column(Integer, primary_key=True, unique=True, autoincrement=True, nullable=False)
    castle_id = Column(Integer, ForeignKey("castles.id"))
    name = Column(String(128), nullable=False)
    summary = Column(Text(512), nullable=False)
    url = Column(String(256), nullable=True)

class CastleDistance(Base):
    __tablename__ = "castle_distances"
    id = Column(Integer, primary_key=True, unique=True, autoincrement=True, nullable=False)
    castle_id_1 = Column(Integer, nullable=False)
    castle_id_2 = Column(Integer, nullable=False)
    distance = Column(Double(8, False, 4), nullable=False)
    time = Column(DateTime(), nullable=True)

