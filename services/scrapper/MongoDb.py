import pymongo, os
from datetime import datetime
from const import MONGO_COL_NAME, MONGO_URL, MONGO_DB_NAME


class MongoDb:
    def __init__(self):
        client = pymongo.MongoClient(str(os.getenv(MONGO_URL)))

        self.__db = client[str(os.getenv(MONGO_DB_NAME))]
        self.__col = self.__db[MONGO_COL_NAME]

    def add_product(self, product: dict[str, any]):
        now = datetime.utcnow().replace(microsecond=0).isoformat("T")
        json_body = {
            "name": product["name"],
            "gpu": product["gpu"],
            "image": product["image"],
            "price": [
                {
                    "date": now,
                    "value": product["price"],
                }
            ],
            "specyfication": [
                {"ray_tracing": product["ray_tracing"]},
                {"type_of_connector": product["type_of_connector"]},
                {"memory": product["memory"]},
                {"type_of_memory": product["type_of_memory"]},
                {
                    "effective_memory_timing": product[
                        "effective_memory_timing"
                    ]
                },
                {"core_clock": product["core_clock"]},
                {"CUDA_cores": product["CUDA_cores"]},
                {"cooling_type": product["cooling_type"]},
                {"types_of_outputs": product["types_of_outputs"]},
                {"supported_libraries": product["supported_libraries"]},
                {"power_supply_connector": product["power_supply_connector"]},
                {
                    "recommended_power_supply": product[
                        "recommended_power_supply"
                    ]
                },
                {"power_consumption": product["power_consumption"]},
                {"length": product["length"]},
                {"width": product["width"]},
                {"height": product["height"]},
                {"warranty": product["warranty"]},
                {"manufacturer_code": product["manufacturer_code"]},
                {"x-kom_code": product["x-kom_code"]},
            ],
        }

        if self.__col.find_one({"name": product["name"]}) is not None:
            l1 = self.__col.find_one({"name": product["name"]})["price"]
            l2 = {"date": now, "value": product["price"]}
            l1.append(l2)
            self.__col.update_one(
                {"name": product["name"]}, {"$set": {"price": l1}}
            )
        else:
            self.__col.insert_one(json_body[0])
