import unittest
import get_info
import services.crawler.get_url


class Test(unittest.TestCase):
    def test_link(self):
        result = services.crawler.get_url.get_prod_url('https://www.x-kom.pl', '/g-5/c/345-karty-graficzne.html?page=1')[0]['href']
        self.assertEqual(result, 'https://www.x-kom.pl/p/480513-karta-graficzna-nvidia-gigabyte-geforce-gtx-1660-ti-oc-6gb-gddr6.html')

    def test_price(self):
        result = get_info.get_info_one_product('https://www.x-kom.pl/p/480513-karta-graficzna-nvidia-gigabyte-geforce-gtx-1660-ti-oc-6gb-gddr6.html')['price']
        self.assertEqual(result, 1599.0)

    def test_method(self):
        result = get_info.get_info_one_product('https://www.x-kom.pl/p/480513-karta-graficzna-nvidia-gigabyte-geforce-gtx-1660-ti-oc-6gb-gddr6.html')
        self.assertEqual(result, {'name': 'Gigabyte GeForce GTX 1660 Ti OC 6GB GDDR6',
                                  'gpu': 'GeForce GTX 1660 Ti', 'price': 1599.,
                                  'image': 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/2/pr_2019_2_18_14_33_9_864_05.jpg'})

if __name__ == '__main__':
    unittest.main()
