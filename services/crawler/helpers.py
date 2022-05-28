from MongoDb import MongoDb
from datetime import datetime
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from time import sleep

HREF = "href"
LINK_CSS_CLASS = "sc-1h16fat-0 sc-1yu46qn-7 kaqYqE"
SOUP_CSS_CLASS = "sc-1xy3kzh-8 jpsIZh sc-1h16fat-0 irSQpN"
PARSER_TYPE = "lxml"


def get_prod_url(base_url: str, url: str):
    links = []
    while url:
        crawl_page = base_url + url
        html_page = urlopen(Request(crawl_page))
        soup = BeautifulSoup(html_page, PARSER_TYPE)
        for link in soup.findAll("a", class_=LINK_CSS_CLASS):
            links.append({HREF: base_url + link.get(HREF)})
        next_btn = soup.find(class_=SOUP_CSS_CLASS)
        url = next_btn.get(HREF) if next_btn else None
        sleep(1)
    return links


def add_product(db: MongoDb, base_url: str, url: str):
    links = get_prod_url(base_url, url)
    now = datetime.utcnow().replace(microsecond=0).isoformat("T")
    for link in links:
        db.add(now, link)
