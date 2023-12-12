from fastapi import FastAPI
from router import router as rt
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base

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
async def migrate():
    print("create tables...")
    try:
        Base.metadata.create_all(bind=engine)
        print("done")
    except Exception as e:
        print(e)
        pass
