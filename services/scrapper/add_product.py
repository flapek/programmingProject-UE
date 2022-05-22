from get_info import get_info_one_product
import pymongo
from datetime import datetime
import configparser

config = configparser.ConfigParser()
config.read("config.ini")


def add_product(url):
    product = get_info_one_product(url)
    now = datetime.utcnow().replace(microsecond=0).isoformat("T")
    json_body = [{
        "name": product['name'],
        "gpu": product['gpu'],
        "image": product['image'],
        "price": [
            {
                "date": now,
                "value": product['price']
            }],
        'ray_tracing': product['ray_tracing'],
        'type_of_connector': product['type_of_connector'],
        'memory': product['memory'],
        'type_of_memory': product['type_of_memory'],
        'effective_memory_timing': product['effective_memory_timing'],
        'core_clock': product['core_clock'],
        'CUDA_cores': product['CUDA_cores'],
        'cooling_type': product['cooling_type'],
        'types_of_outputs': product['types_of_outputs'],
        'supported_libraries': product['supported_libraries'],
        'power_supply_connector': product['power_supply_connector'],
        'recommended_power_supply': product['recommended_power_supply'],
        'power_consumption': product['power_consumption'],
        'length': product['length'],
        'width': product['width'],
        'height': product['height'],
        'warranty': product['warranty'],
        'manufacturer_code': product['manufacturer_code'],
        'x-kom_code': product['x-kom_code']
    }]
    myclient = pymongo.MongoClient(config['db']['address'],
                                   username=config['db']['username'],
                                   password=config['db']['password'])
    # myclient = pymongo.MongoClient("mongodb://localhost:27017/", username='root', password='example')
    mydb = myclient[config['db']['db_client_name']]
    # mydb = myclient["mydatabase"]
    mycol = mydb[config['db']['db_name']]
    # mycol = mydb['products']
    mycol.insert_one(json_body[0])
    return 'Done'
