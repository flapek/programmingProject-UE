from get_info import get_info_one_product
import pymongo
from datetime import datetime
import configparser

config = configparser.ConfigParser()
config.read("config.ini")


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
    myclient = pymongo.MongoClient(config['db']['address'],
                                   username=config['db']['username'],
                                   password=config['db']['password'])
    # myclient = pymongo.MongoClient("mongodb://localhost:27017/", username='root', password='example')
    mydb = myclient[config['db']['db_client_name']]
    # mydb = myclient["mydatabase"]
    mycol = mydb[config['db']['db_name']]
    # mycol = mydb['products']
    mycol.insert_one(json_body[0])
    return 'Done'
