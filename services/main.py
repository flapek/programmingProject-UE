from scrapper.send import send
from crawler.main import get_prod_url

base_url = 'https://www.x-kom.pl'
category_url = '/g-5/c/345-karty-graficzne.html?page=1'

def crawler_send(base_url, category_url):
    for i in range(len(get_prod_url(base_url, category_url))):
        link = [str(val) for val in get_prod_url(base_url, category_url)[i].values()]
        send(link[0])

crawler_send(base_url, category_url)
