import add_url
from dotenv import load_dotenv

load_dotenv()

base_url = 'https://www.x-kom.pl'
category_url = '/g-5/c/345-karty-graficzne.html?page=1'

add_url.add_product(base_url, category_url)
