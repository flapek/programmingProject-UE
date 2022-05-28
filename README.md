# programmingProject-UE

## Prerequisites

- [docker and docker-compose](https://docs.docker.com/get-docker/)
- [node](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/)
- [beautifulsoup4](https://pypi.org/project/beautifulsoup4/)
- [cloudscraper](https://pypi.org/project/cloudscraper/)

## Start

1. Run mongo with following command

```bash
docker-compose -f infrastructure/docker-compose.yml up -d
# check if mongo start corectly
docker ps
```

If you want to stop container run following command

```bash
docker-compose -f infrastructure/docker-compose
```

2. To turn on the receiver (RabbitMQ server), use the following command:

```
python services/scrapper/receive.py
```

When enabled, the receiver will be able to receive messages sent by the crawler.

3. To start the crawler with sending messages to the receiver use the following command:

```
python services/main.py
```

Data is currently being sent to the database.

# Performing unit tests

Run test.py file in services/scrapper
