from bs4 import BeautifulSoup
import cloudscraper


def get_info_one_product(url):
    product = {'name': '', 'gpu': '', 'price': 0, 'image': ''}
    scraper = cloudscraper.create_scraper()
    response = scraper.get(url)
    soup = BeautifulSoup(response.content, "lxml")
    product_list = soup.find_all('div', class_='sc-14ybyi4-0 dTlKOe')
    for item in product_list:
        price = item.find_all('div', class_="n4n86h-4 eKNYud")[0].text.\
            replace(",", ".").replace(" ", "").replace("zł", "")
        product['price'] = float(price)
        product['name'] = item.find_all('h1', class_="sc-1bker4h-4 hHqGMN")[0].text
    images = soup.find_all('span', class_='sc-1tblmgq-0 jiiyfe-2 hEGONW sc-1tblmgq-3 fHoITM')[0]
    for item in images:
        product['image'] = item['src']
    specification = soup.find_all('div', class_='sc-hSdWYo sc-13p5mv-0 dwDNsi sc-eHgmQL jBndDl')
    for item in specification:
        if 'Układ graficzny' in item.text:
            product['gpu'] = item.text.replace('Układ graficzny', '')
    return product
