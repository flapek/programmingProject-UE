from fastapi.testclient import TestClient
from main import app, db
import MongoDb


client = TestClient(app)

# data = {"name": "IsaiahT-Tech", "due_date": "Today", "description": "string"}


def test_get_items_return_empty_array():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == "[]"

# def override_find():
#     return {"name": "IsaiahT-Tech", "due_date": "Today", "description": "string"}

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    # assert response.json() == data