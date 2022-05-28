import os
from dotenv import load_dotenv
from MongoDb import MongoDb
from const import CRAWLER_BASE_URL, CRAWLER_CATEGORY_URL
from helpers import add_product

load_dotenv()

db = MongoDb()
base_url = str(os.getenv(CRAWLER_BASE_URL))
category_url = str(os.getenv(CRAWLER_CATEGORY_URL))


add_product(base_url, category_url)
