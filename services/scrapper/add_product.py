from get_info import get_info_one_product
import pymongo
from datetime import datetime


def add_product(url):
    product = get_info_one_product(url)
    now = datetime.utcnow().replace(microsecond=0).isoformat("T")
    json_body = [{
        "name": product['name'],
        "gpu": product['gpu'],
        "image": product['image'],
        "price": [
            {
                "date": now,
                "value": product['price']
            }
        ]
    }]
    myclient = pymongo.MongoClient("mongodb://localhost:27017/", username='root', password='example')
    mydb = myclient["mydatabase"]
    mycol = mydb["products"]
    mycol.insert_one(json_body[0])
    return 'Done'
