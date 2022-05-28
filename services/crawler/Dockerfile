FROM python:3.9.13-alpine3.15 as build
WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["py", "main.py"]