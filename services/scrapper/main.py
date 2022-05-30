import sys, os, json
from dotenv import load_dotenv
from const import (
    SCRAPPER_BASE_URL,
    SCRAPPER_CATEGORY_URL,
    RABBITMQ_USERNAME,
    RABBITMQ_PASSWORD,
    RABBITMQ_HOST,
)
from helpers import crawler_send
from message_broker import Broker
from MongoDb import MongoDb
from get_info import get_info_one_product

load_dotenv()

broker = Broker(
    str(os.getenv(RABBITMQ_HOST)),
    str(os.getenv(RABBITMQ_USERNAME)),
    str(os.getenv(RABBITMQ_PASSWORD)),
    {"connection_name": "link scraping"},
)
mongo = MongoDb()

crawler_send(
    str(os.getenv(SCRAPPER_BASE_URL)),
    str(os.getenv(SCRAPPER_CATEGORY_URL)),
    broker,
)


def broker_callback(ch, method, properties, body):
    print(" [x] Received %r" % json.loads(body))
    [str(val) for val in json.loads(body).values()][0]
    for item in json.loads(body).values():
        product = get_info_one_product(str(item))
        mongo.add_product(product)


def main():
    broker.init_queue()
    broker.init_consumers(broker_callback)
    broker.start()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("Interrupted")
        try:
            broker.stop()
            sys.exit(0)
        except SystemExit:
            broker.stop()
            os._exit(0)
