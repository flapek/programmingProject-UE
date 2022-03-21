from bs4 import BeautifulSoup as soup
import cloudscraper
import json

# def get_info(url):
#     info = {"name": "", "price": 0, "url": "", "vendor": ""}
#     page_html = requests.get(url)
#     page_soup = soup(page_html.text, "html.lxml")
#     info["name"] = page_soup.findAll("h1")[0].text.strip()
#     info["price"] = page_soup.findAll("div",{"class":"u7xnnm-4 iVazGO"})[0].text.replace(",",".").replace("zł","").replace(" ","")
#     info["url"] = url
#     info["vendor"] = "xkom"
#     return page_html

# print(get_info('https://www.x-kom.pl/p/515071-karta-graficzna-amd-powercolor-radeon-rx-5700-red-devil-8gb-gddr6.html'))

# baseurl = 'https://www.x-kom.pl/'
# r = requests.get('https://www.x-kom.pl/p/503283-sluchawki-przewodowe-razer-kraken-x.html')

# baseurl = 'https://www.thewhiskyexchange.com/'
# r = requests.get('https://www.thewhiskyexchange.com/c/35/japanese-whisky')
# soup = soup(r.content, "lxml")

# productlist = soup.find_all('div', class_='n4n86h-4 eKNYud')
# print(productlist)

# def get_info(url):


scraper = cloudscraper.create_scraper()
url = "https://www.x-kom.pl/g-7/c/2374-karty-graficzne-do-gier.html"
response = scraper.get(url)
soup = soup(response.content, "lxml")
productlist = soup.find_all('div', class_='sc-162ysh3-1 dAqvUz sc-gzVnrw fPPGgM')
price_list = []
name_list = []
for item in productlist:
    price = item.find_all('div', class_="sc-6n68ef-1 YwZOg")[0].text.\
        replace(",", ".").replace(" ", "").replace("zł", "")
    if len(price) > 11:
        discounted_price = price[int(len(price)/2):]
        price_list.append(float(discounted_price))
    else:
        price_list.append(float(price))
    name_list.append(item.find_all('a', class_="sc-1h16fat-0 irSQpN")[0].text)

products = {}
for key in name_list:
    for value in price_list:
        products[key] = value
        price_list.remove(value)
        break

#print(products)

json_product_list = json.dumps(products)
print(json_product_list)


# https://www.x-kom.pl/g-5/c/345-karty-graficzne.html
# https://www.youtube.com/watch?v=nCuPv3tf2Hg
# https://www.kodolamacz.pl/blog/wyzwanie-python-7-web-scraping/
