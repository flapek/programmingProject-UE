import os, pika, json
from const import (
    QUEUE,
)


class Broker:
    def __init__(
        self,
        host: str,
        username: str,
        password: str,
        client_properties: str = "",
    ):
        credentials = pika.PlainCredentials(username, password)
        self.__connection = pika.BlockingConnection(
            pika.ConnectionParameters(
                host=host,
                credentials=credentials,
                client_properties=client_properties,
            )
        )
        self.__channel = self.__connection.channel()

    def init_queue(self):
        self.__channel.queue_declare(queue=QUEUE)

    def init_consumers(self, callback):
        self.__channel.basic_consume(
            queue=QUEUE, on_message_callback=callback, auto_ack=True
        )

    def send(self, data, queue: str = QUEUE):
        self.__channel.basic_publish(
            exchange="", routing_key=queue, body=json.dumps(data)
        )

    def start(self):
        print(" [*] Waiting for messages. To exit press CTRL+C")
        self.__channel.start_consuming()

    def stop(self):
        self.__connection.close()
