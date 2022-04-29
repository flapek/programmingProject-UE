import unittest

import get_info
import services.crawler.get_url


class TestCalc(unittest.TestCase):
    def test_link(self):
        result = services.crawler.get_url.get_prod_url('https://www.x-kom.pl', '/g-5/c/345-karty-graficzne.html?page=1')[0]['href']
        self.assertEqual(result, 'https://www.x-kom.pl/p/480513-karta-graficzna-nvidia-gigabyte-geforce-gtx-1660-ti-oc-6gb-gddr6.html')

    def test_price(self):
        result = get_info.get_info_one_product('https://www.x-kom.pl/p/480513-karta-graficzna-nvidia-gigabyte-geforce-gtx-1660-ti-oc-6gb-gddr6.html')['price']
        self.assertEqual(result, 1599)


if __name__ == '__main__':
    unittest.main()
