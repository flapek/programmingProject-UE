from fastapi.testclient import TestClient
from main import app, db
import re
import json


client = TestClient(app)
names = [
    "Adam",
    "aLICE",
    "airplane",
    "CAR",
    "adaM",
    "toy",
    "fLOwer",
    "adam",
    "family",
]


def test_get_items_return_json():
    response = client.get("/")
    assert response.status_code == 200
    assert type(response.json()) == str
    assert re.search(r"\[.*]", response.json()) is not None


def test_search():
    db.drop()
    for element in names:
        db.add({"name": element})

    assert db.search("a") == [
        "Adam",
        "aLICE",
        "airplane",
        "CAR",
        "adaM",
        "adam",
        "family",
    ]
    assert db.search("fl") == ["fLOwer"]
    assert db.search("z") == []
    assert db.search("") == names


def test_find():
    db.drop()
    skip = 2
    size = len(names)
    for element in names:
        db.add({"name": element})
    assert len(json.loads(db.find(size, 0, None))) == size
    assert len(json.loads(db.find(size, skip, None))) == size - skip
    assert len(json.loads(db.find(size + 100, skip, None))) == size - skip
    assert len(json.loads(db.find(size, size + 1, None))) == 0
    assert len(json.loads(db.find(size, 0, "adam"))) == 3
    assert len(json.loads(db.find(size, skip, "adam"))) == 1
    assert [x["name"] for x in json.loads(db.find(size, 0, None))] == names
    assert [x["name"] for x in json.loads(db.find(size, skip, None))] == names[
        skip:
    ]
    assert [x["name"] for x in json.loads(db.find(size, 0, "adAM"))] == [
        "Adam",
        "adaM",
        "adam",
    ]
    assert [x["name"] for x in json.loads(db.find(size, skip, "adAM"))] == [
        "adam"
    ]
