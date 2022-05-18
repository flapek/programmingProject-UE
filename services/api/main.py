from typing import Optional
from fastapi import FastAPI
from MongoDb import MongoDb

app = FastAPI()
db = MongoDb()


@app.get("/")
def get_items(next: Optional[int] = None, skip: int = 0, search_text: Optional[str] = None):
    return db.find(next, skip, search_text)

@app.get("/search")
def search_items(search):
    return db.search(search)