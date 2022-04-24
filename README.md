# programmingProject-UE

## Prerequisites

- [docker and docker-compose](https://docs.docker.com/get-docker/)
- [node](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/)

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
