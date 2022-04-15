from typing import Optional
from fastapi import FastAPI
from MongoDb import MongoDb

app = FastAPI()
db = MongoDb(False)


@app.get("/")
def read_item(next: Optional[int] = None, skip: int = 0):
    return db.find(next, skip)
