import pika
import json

credentials = pika.PlainCredentials('root', 'root')
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost', credentials=credentials))
channel = connection.channel()

order = {
    'link': 'google.com'
}

channel.queue_declare(queue='hello')

channel.basic_publish(exchange='', routing_key='hello', body=json.dumps(order))

print(" [x] Sent message'")

connection.close()
