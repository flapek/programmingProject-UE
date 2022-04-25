from scrapper.send import send
from crawler.main import get_prod_url

base_url = 'https://www.x-kom.pl'
category_url = '/g-5/c/345-karty-graficzne.html?page=1'

def crawler_send(base_url, category_url):
    for i in range(len(get_prod_url(base_url, category_url))):
        link = [str(val) for val in get_prod_url(base_url, category_url)[i].values()]
        send(link[0])

crawler_send(base_url, category_url)
#add_product('https://www.x-kom.pl/p/715689-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-gaming-oc-8gb-gddr6.html')

#send('https://www.x-kom.pl/p/715689-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-gaming-oc-8gb-gddr6.html')

#print(get_info_one_product('https://www.x-kom.pl/p/717636-karta-graficzna-nvidia-palit-geforce-rtx-3050-dual-8gb-gddr6.html'))
#print(get_info_onsse_product('https://www.x-kom.pl/p/715689-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-gaming-oc-8gb-gddr6.html'))