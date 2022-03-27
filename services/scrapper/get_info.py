from bs4 import BeautifulSoup
import cloudscraper


def get_info_one_product(url):
    product = {'name': '', 'price': 0}
    scraper = cloudscraper.create_scraper()
    response = scraper.get(url)
    soup = BeautifulSoup(response.content, "lxml")
    product_list = soup.find_all('div', class_='sc-14ybyi4-0 dTlKOe')
    for item in product_list:
        price = item.find_all('div', class_="n4n86h-4 eKNYud")[0].text.\
            replace(",", ".").replace(" ", "").replace("zł", "")
        product['price'] = float(price)
        product['name'] = item.find_all('h1', class_="sc-1bker4h-4 hHqGMN")[0].text
    return product
