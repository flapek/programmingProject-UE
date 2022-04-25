import pika
import json
import configparser
from services.scrapper import constants

config = configparser.ConfigParser()
config.read("scrapper/config.ini")


def send(link):
    credentials = pika.PlainCredentials(config['rabbit_mq']['username'], config['rabbit_mq']['password'])
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host=config['rabbit_mq']['host'], credentials=credentials))
    channel = connection.channel()

    order = {
        'link': link
    }

    channel.queue_declare(queue=constants.QUEUE)

    channel.basic_publish(exchange='', routing_key=constants.QUEUE, body=json.dumps(order))

    connection.close()
