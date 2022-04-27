import pika, sys, os
from add_product import add_product
import json
import configparser
from services.scrapper import constants

config = configparser.ConfigParser()
config.read("config.ini")


def main():
    credentials = pika.PlainCredentials(config['rabbit_mq']['username'], config['rabbit_mq']['password'])
    props = {'connection_name': 'link scraping'}
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=config['rabbit_mq']['host'],
                                                                   credentials=credentials,
                                                                   client_properties=props))
    channel = connection.channel()

    channel.queue_declare(queue=constants.QUEUE)

    def callback(ch, method, properties, body):
        print(" [x] Received %r" % json.loads(body))
        add_product([str(val) for val in json.loads(body).values()][0])
    channel.basic_consume(queue=constants.QUEUE, on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
