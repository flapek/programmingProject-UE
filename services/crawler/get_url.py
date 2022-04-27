from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from time import sleep
import json
from random import randint


# base_url = 'https://www.x-kom.pl'
# category_url = '/g-5/c/345-karty-graficzne.html?page=1'


def get_prod_url(base_url: str, url: str):
    links = []
    while url:
        crawl_page = base_url + url
        html_page = urlopen(Request(crawl_page))
        # print(crawl_page)
        soup = BeautifulSoup(html_page, "lxml")
        for link in soup.findAll('a', class_='sc-1h16fat-0 sc-1yu46qn-7 kaqYqE'):
            links.append('https://www.x-kom.pl'+link.get('href'))
        # print(links)
        # print(len(links))
        next_btn = soup.find(class_='sc-1xy3kzh-8 jpsIZh sc-1h16fat-0 irSQpN')
        url = next_btn.get('href') if next_btn else None
        sleep(randint(1, 3))
    return links
