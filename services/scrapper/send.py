import pika
import json
import configparser

config = configparser.ConfigParser()
config.read("scrapper/config.ini")


def send(link):
    credentials = pika.PlainCredentials(config['rabbit_mq']['username'], config['rabbit_mq']['password'])
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost', credentials=credentials))
    channel = connection.channel()

    order = {
        'link': link
    }

    channel.queue_declare(queue='scrapped_links')

    channel.basic_publish(exchange='', routing_key='scrapped_links', body=json.dumps(order))

    print(" [x] Sent message'")

    connection.close()
