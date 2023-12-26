from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.router import router as rt
from src.database import (
    engine,
    Base
)
from src.service import (
    load_data, 
    write_data
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(router=rt)


@app.on_event("startup")
def startup():
    migrate()
    try:
        write_data(load_data())
    except Exception as e:
        print(e)
        pass

def migrate():
    print("create tables...")
    try:
        Base.metadata.create_all(bind=engine)
        print("done")
    except Exception as e:
        print(e)
        pass
