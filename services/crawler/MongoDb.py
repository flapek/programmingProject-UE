import pymongo
import os
import json
from const import MONGO_COL_NAME, MONGO_URL, MONGO_DB_NAME


class MongoDb:
    def __init__(self):
        client = pymongo.MongoClient(str(os.getenv(MONGO_URL)))

        self.__db = client[str(os.getenv(MONGO_DB_NAME))]
        self.__col = self.__db[MONGO_COL_NAME]

    def add(self, date_now: str, link: str):
        json_body = [{
            "links": [
            {
                "date": date_now,
                "url": link
            }]
        }]
        self.__col.insert_one(json_body)

    def drop(self):
        self.__col.drop()
