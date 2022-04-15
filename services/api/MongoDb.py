import pymongo, os, json
from dotenv import load_dotenv


load_dotenv()


class MongoDb:
    def __init__(self, is_localhost: bool = True):
        if is_localhost:
            client = pymongo.MongoClient(
                "mongodb://localhost:27017/",
                username=os.getenv("LH_USERNAME"),
                password=os.getenv("LH_PASSWORD"),
            )
        else:
            url = f'mongodb+srv://{os.getenv("MONGO_USERNAME")}:{os.getenv("MONGO_PASSWORD")}@cluster0.skowb.mongodb.net/{os.getenv("MONGODB_DB_NAME")}?retryWrites=true&w=majority'
            client = pymongo.MongoClient(url)

        self.db = client[os.getenv("MONGO_DB_NAME")]
        self.col = self.db[os.getenv("MONGO_COL_NAME")]
        self.mongo_db = list(self.col.find())

    def count(self):
        return len(self.mongo_db)

    def find_all(self):
        return json.dumps(self.mongo_db)

    def find(self, next, skip):
        correct_end = min(self.count(), next + skip)
        return json.dumps(self.mongo_db[skip:correct_end])
