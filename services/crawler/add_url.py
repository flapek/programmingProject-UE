from services.crawler.get_url import get_prod_url
import pymongo
from datetime import datetime


base_url = 'https://www.x-kom.pl'
category_url = '/g-5/c/345-karty-graficzne.html?page=1'


def add_product(base_url: str, url: str):
    links = get_prod_url(base_url,url)
    now = datetime.utcnow().replace(microsecond=0).isoformat("T")
    for link in links:
        json_body = [{
            "links": [
            {
                "date": now,
                "url": link
            }]
        }]
        # print(link)
        # print(json_body)
        myclient = pymongo.MongoClient("mongodb://localhost:27017/", username='root', password='example')
        mydb = myclient["mydatabase"]
        mycol = mydb["links"]
        mycol.insert_one(json_body[0])
    return 'Done'