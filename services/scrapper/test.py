import unittest
import services.crawler.get_url
from bs4 import BeautifulSoup
import cloudscraper
import configparser

config = configparser.ConfigParser()
config.read("config.ini")

url = config['url']['base_url'] + config['url']['category_url']
scraper = cloudscraper.create_scraper()
response = scraper.get(url)
open('testing_site.html', 'wb').write(response.content)


class Test(unittest.TestCase):
    def setUp(self) -> None:
        self.result = services.crawler.get_url.get_prod_url('https://www.x-kom.pl',
                                                            '/g-5/c/345-karty-graficzne.html?page=1')[0]['href']

    def test_method(self):
        with open('testing_site.html', "r", encoding='utf-8') as f:
            text = f.read()
        soup = BeautifulSoup(text, "lxml")
        links = []
        for link in soup.findAll('a', class_='sc-1h16fat-0 sc-1yu46qn-7 kaqYqE'):
            links.append({
                'href': 'https://www.x-kom.pl' + link.get('href')
            })
        self.assertEqual(links[0]['href'], self.result)


if __name__ == '__main__':
    unittest.main()
