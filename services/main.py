from scrapper.send import send
from crawler.get_url import get_prod_url
import scrapper.get_info
import configparser


def crawler_send(base_url, category_url):
    for i in range(len(get_prod_url(base_url, category_url))):
        link = [str(val) for val in get_prod_url(base_url, category_url)[i].values()]
        send(link[0])


config = configparser.ConfigParser()
config.read("scrapper/config.ini")
crawler_send(config['url']['base_url'], config['url']['category_url'])
