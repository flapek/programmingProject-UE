import pymongo
import os
import json
from const import MONGO_COL_NAME, MONGO_URL, MONGO_DB_NAME


class MongoDb:
    def __init__(self):
        client = pymongo.MongoClient(str(os.getenv(MONGO_URL)))

        self.__db = client[str(os.getenv(MONGO_DB_NAME))]
        self.__col = self.__db[MONGO_COL_NAME]

    def find(self, next, skip, search_text):
        mongo_db = list(self.__col.find())
        for element in mongo_db:
            element["_id"] = str(element["_id"])

        if next is None:
            return json.dumps(mongo_db)

        if search_text is not None:
            mongo_db = [
                x for x in mongo_db if search_text.lower() in x["name"].lower()
            ]
        correct_end = min(len(mongo_db), next + skip)
        return json.dumps(mongo_db[skip:correct_end])

    def search(self, search_text):
        mongo_db = list(self.__col.find())
        return [
            x["name"]
            for x in mongo_db
            if search_text.lower() in x["name"].lower()
        ]

    def add(self, data):
        self.__col.insert_one(data)

    def drop(self):
        self.__col.drop()
