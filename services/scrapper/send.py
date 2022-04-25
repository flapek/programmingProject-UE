import pika
import json


def send(link):
    credentials = pika.PlainCredentials('root', 'root')
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
