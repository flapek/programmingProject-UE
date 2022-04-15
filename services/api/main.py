from typing import Optional
from fastapi import FastAPI
from MongoDb import MongoDb

app = FastAPI()

@app.get("/")
def read_root():
    return MongoDb(False).find_all()


@app.get("/next={next}&skip={skip}")
def read_item(next: int, skip: int):
    return MongoDb(False).find(next, skip)

