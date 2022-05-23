from bs4 import BeautifulSoup
import cloudscraper


def get_info_one_product(url):
    product = {'name': '', 'price': 0, 'image': '', 'gpu': '', 'ray_tracing': '', 'type_of_connector': '', 'memory': '',
               'type_of_memory': '', 'effective_memory_timing': '', 'core_clock': '', 'CUDA_cores': '',
               'cooling_type': '', 'types_of_outputs': '', 'supported_libraries': '', 'power_supply_connector': '',
               'recommended_power_supply': '', 'power_consumption': '', 'length': '', 'width': '', 'height': '',
               'warranty': '', 'manufacturer_code': '', 'x-kom_code': ''
               }
    scraper = cloudscraper.create_scraper()
    response = scraper.get(url)
    soup = BeautifulSoup(response.content, "lxml")
    product_list = soup.find_all('div', class_='sc-14ybyi4-0 dTlKOe')
    for item in product_list:
        price = item.find_all('div', class_="n4n86h-4 eKNYud")[0].text.\
            replace(",", ".").replace(" ", "").replace("zł", "")
        product['price'] = float(price)
        product['name'] = item.find_all('div', class_="sc-1bker4h-10 bdhgIb")[0].text
    images = soup.find_all('span', class_='sc-1tblmgq-0 jiiyfe-2 hEGONW sc-1tblmgq-3 fHoITM')[0]
    for item in images:
        product['image'] = item['src']
    specification = soup.find_all('div', class_='sc-iRbamj sc-13p5mv-0 dwDNsi sc-jlyJG kWwscn')
    specs = ['Układ graficzny', 'Obsługa Ray tracingu', 'Rodzaj złącza', 'Pamięć', 'Rodzaj pamięci',
             'Efektywne taktowanie pamięci', 'Taktowanie rdzenia', 'Rdzenie CUDA', 'Typ chłodzenia',
             'Rodzaje wyjść', 'Obsługiwane biblioteki', 'Złącze zasilania', 'Rekomendowana moc zasilacza',
             'Pobór mocy', 'Długość', 'Szerokość', 'Wysokość', 'Gwarancja', 'Kod producenta', 'Kod x-kom']
    type_list = ['gpu', 'ray_tracing', 'type_of_connector', 'memory', 'type_of_memory',
                 'effective_memory_timing', 'core_clock', 'CUDA_cores', 'cooling_type',
                 'types_of_outputs', 'supported_libraries', 'power_supply_connector', 'recommended_power_supply',
                 'power_consumption', 'length', 'width', 'height', 'warranty', 'manufacturer_code', 'x-kom_code']
    for i in range(len(specs)):
        for item in specification:
            gattul = item.find_all("div", class_="sc-13p5mv-3 gATTUl")
            if specs[i] in item.text:
                if len(gattul) > 1:
                    many_specs = [gattul[i].text for i in range(len(gattul))]
                    product[type_list[i]] = many_specs
                else:
                    product[type_list[i]] = item.text.replace(specs[i], '')

    return product
