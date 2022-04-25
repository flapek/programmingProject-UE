from add_product import add_product
from send import send
from services.crawler.main import get_prod_url
from get_info import get_info_one_product

base_url = 'https://www.x-kom.pl'
category_url = '/g-5/c/345-karty-graficzne.html?page=1'


for i in range(len(get_prod_url(base_url, category_url))):
    link = [str(val) for val in get_prod_url(base_url, category_url)[i].values()]
    send(link[0])

#add_product('https://www.x-kom.pl/p/715689-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-gaming-oc-8gb-gddr6.html')

#send('https://www.x-kom.pl/p/715689-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-gaming-oc-8gb-gddr6.html')

#print(get_info_one_product('https://www.x-kom.pl/p/717636-karta-graficzna-nvidia-palit-geforce-rtx-3050-dual-8gb-gddr6.html'))
#print(get_info_one_product('https://www.x-kom.pl/p/715689-karta-graficzna-nvidia-gigabyte-geforce-rtx-3050-gaming-oc-8gb-gddr6.html'))