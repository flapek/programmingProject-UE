import os
from dotenv import load_dotenv
from MongoDb import MongoDb
from const import CRAWLER_BASE_URL, CRAWLER_CATEGORY_URL
from helpers import add_product

load_dotenv()

add_product(
    MongoDb(),
    str(os.getenv(CRAWLER_BASE_URL)),
    str(os.getenv(CRAWLER_CATEGORY_URL)),
)
