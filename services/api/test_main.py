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


def test_get_items_correct_status_code():
    response = client.get("/")
    assert response.status_code == 200

def test_get_items_return_json():
    response = client.get("/")
    assert type(response.json()) == str
    assert re.search(r"\[.*]", response.json()) is not None

def test_search_return_items_with_a():
    db.drop()
    for item in names:
        db.add({"name": item})

    assert db.search("a") == [
        "Adam",
        "aLICE",
        "airplane",
        "CAR",
        "adaM",
        "adam",
        "family",
    ]

def test_search_return_one_item_in_list():
    db.drop()
    for item in names:
        db.add({"name": item})
    assert db.search("fl") == ["fLOwer"]

def test_search_return_empty_list():
    db.drop()
    for item in names:
        db.add({"name": item})
    assert db.search("z") == []

def test_search_return_entire_list():
    db.drop()
    for item in names:
        db.add({"name": item})
    assert db.search("") == names


def test_find_return_length_of_list():
    db.drop()
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert len(json.loads(db.find(size, 0, None))) == size

def test_find_return_length_of_list_with_skip():
    db.drop()
    skip = 2
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert len(json.loads(db.find(size, skip, None))) == size - skip

def test_find_more_than_length_of_list_return_length_of_list_with_skip():
    db.drop()
    skip = 2
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert len(json.loads(db.find(size + 100, skip, None))) == size - skip

def test_find_return_zero():
    db.drop()
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert len(json.loads(db.find(size, size + 1, None))) == 0

def test_find_return_three():
    db.drop()
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert len(json.loads(db.find(size, 0, "adam"))) == 3

def test_find_return_one():
    db.drop()
    skip = 2
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert len(json.loads(db.find(size, skip, "adam"))) == 1

def test_find_return_entire_list():
    db.drop()
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert [x["name"] for x in json.loads(db.find(size, 0, None))] == names

def test_find_return_list_with_skip():
    db.drop()
    skip = 2
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert [x["name"] for x in json.loads(db.find(size, skip, None))] == names[
        skip:
    ]

def test_find_return_list_with_three_itmes():
    db.drop()
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert [x["name"] for x in json.loads(db.find(size, 0, "adAM"))] == [
        "Adam",
        "adaM",
        "adam",
    ]

def test_find_return_list_with_one_item_because_of_skip():
    db.drop()
    skip = 2
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert [x["name"] for x in json.loads(db.find(size, skip, "adAM"))] == [
        "adam"
    ]

def test_find_return_empty_list():
    db.drop()
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert [x["name"] for x in json.loads(db.find(size, 0, "z"))] == []
    
def test_find_return_list_with_two_items():
    db.drop()
    size = len(names)
    for item in names:
        db.add({"name": item})
    assert [x["name"] for x in json.loads(db.find(size, 0, "f"))] == ["fLOwer", "family"]