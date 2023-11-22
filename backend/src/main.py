from fastapi import FastAPI
from router import router as rt

app = FastAPI()

app.include_router(router=rt)
