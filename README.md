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

2. To add a row to the database run following command: (TEMPORARY)
```
python services/scrapper/main.py
```