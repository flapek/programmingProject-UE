import pymongo
import os
import json
from dotenv import load_dotenv


load_dotenv()


class MongoDb:
    def __init__(self, is_localhost: bool = True):
        if is_localhost:
            client = pymongo.MongoClient(
                "mongodb://localhost:27017/",
                username=os.getenv("MONGO_USERNAME"),
                password=os.getenv("MONGO_PASSWORD"),
            )
        else:
            url = f"""mongodb+srv://{os.getenv("MONGO_USERNAME")}:
            {os.getenv("MONGO_PASSWORD")}@cluster0.skowb.mongodb.net/
            {os.getenv("MONGODB_DB_NAME")}?retryWrites=true&w=majority"""
            client = pymongo.MongoClient(url)

        self.__db = client[os.getenv("MONGO_DB_NAME")]
        self.__col = self.__db[os.getenv("MONGO_COL_NAME")]
        # self.__col.create_index([('name', 'text')])

    def find(self, next, skip, search_text):
        mongo_db = list(self.__col.find())
        for element in mongo_db:
            element["_id"] = str(element["_id"])

        if next is None:
            return json.dumps(mongo_db)

        if search_text is not None:
            mongo_db = [x for x in mongo_db
                        if search_text.lower() in x['name'].lower()]
        correct_end = min(len(mongo_db), next + skip)
        return json.dumps(mongo_db[skip:correct_end])

    def search(self, search_text):
        mongo_db = list(self.__col.find())
        return [x['name'] for x in mongo_db
                if search_text.lower() in x['name'].lower()]

    def add(self, data):
        self.__col.insert_one(data)

    def drop(self):
        self.__col.drop()
