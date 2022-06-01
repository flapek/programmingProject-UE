import { Product } from '../Types';
import { faker } from '@faker-js/faker';

const names: string[] = [
  'Gigabyte GeForce GTX 1660 Ti OC 6GB GDDR6',
  'Inno3D GeForce RTX 2060 Twin X2 6GB GDDR6',
  'Inno3D GeForce GTX 1050 Ti TWIN X2 V2 4GB GDDR5',
  'Inno3D GeForce RTX 3070 Ti X3 LHR 8GB GDDR6X',
  'Gigabyte GeForce RTX 3060 GAMING OC LHR 12GB GDDR6',
  'Gainward GeForce RTX 3060 Ghost 12GB GDDR6',
  'Gigabyte GeForce RTX 3060 Ti GAMING OC LHR 8GB GDDR6',
  'Gigabyte GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6',
  'Gigabyte GeForce RTX 3060 EAGLE OC LHR 12GB GDDR6',
  'Zotac RTX 3060 Ti Gaming Twin Edge OC LHR 8GB GDDR6',
  'Palit GeForce RTX 3060 Dual LHR 12GB GDDR6',
  'MSI GeForce RTX 3060 Ventus X3 OC 12GB GDDR6',
  'XFX Radeon RX 6500 XT SPEEDSTER QICK 4GB GDDR6',
  'Inno3D GeForce RTX 3050 Twin X2 OC 8GB GDDR6',
  'ASUS GeForce RTX 3050 Dual OC 8GB GDDR6',
  'XFX Radeon RX 6600 XT Speedster SWFT 210 8GB GDDR6',
  'Palit GeForce GT 710 2GB DDR3',
  'PowerColor Radeon RX 6600 Fighter 8GB GDDR6',
  'MSI GeForce RTX 3080 Ti VENTUS 3X OC 12GB GDDR6X',
  'Gigabyte GeForce RTX 3070 GAMING OC LHR 8GB GDDR6',
  'EVGA GeForce RTX 3060 XC GAMING LHR 12GB GDDR6',
];

const images: string[] = [
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/2/pr_2019_2_18_14_33_9_864_05.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_11_13_16_52_789_00.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_1_10_23_4_949_01.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_9_12_22_44_632_00.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_15_13_24_23_26_05.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/2/pr_2021_2_23_14_0_42_139_01.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_2_11_14_57_392_05.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/7/pr_2021_7_1_8_25_10_978_06.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_15_13_30_27_153_06.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_25_15_0_38_802_05.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/2/pr_2021_2_23_13_34_25_58_02.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/2/pr_2021_2_22_13_20_23_614_04.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/4/pr_2022_4_20_13_27_40_827_05.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/1/pr_2022_1_24_15_30_1_955_00.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/1/pr_2022_1_26_13_11_4_670_01.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/9/pr_2021_9_22_9_5_32_454_03.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/5/pr_2019_5_31_14_3_53_73_02.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/10/pr_2021_10_14_11_25_11_320_04.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_2_10_6_36_305_05.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_3_9_1_34_507_05.jpg',
  'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/5/pr_2021_5_5_8_36_15_590_05.jpg',
];

const memory: string[] = ['2 GB', '4 GB', '6 GB', '8 GB'];
const memoryType: string[] = ['GDDR5', 'GDDR6'];

const mockedProducts: Product[] = [...new Array(images.length)].map(
  (_, idx) => ({
    name: names[idx],
    gpu: faker.commerce.productName(),
    image: images[idx],
    price: [...new Array(60)].map((_, pIdx) => ({
      value: faker.commerce.price(
        faker.datatype.number({ min: 300, max: 500 }),
        faker.datatype.number({ min: 500, max: 800 }),
        2,
      ),
      date: faker.date.soon(pIdx * 2, '2022-05-20T00:00:00.000Z'),
    })),
    specification: new Map<string, string[]>([
      ['ray_tracing', []],
      ['type_of_connector', []],
      ['memory', [memory[faker.datatype.number(memory.length)]]],
      [
        'type_of_memory',
        [memoryType[faker.datatype.number(memoryType.length)]],
      ],
      ['effective_memory_timing', []],
      ['core_clock', []],
      ['CUDA_cores', []],
      ['cooling_type', []],
      ['types_of_outputs', []],
      ['supported_libraries', []],
      ['power_supply_connector', []],
      ['recommended_power_supply', []],
      ['power_consumption', []],
      ['length', []],
      ['width', []],
      ['height', []],
      ['warranty', []],
      ['manufacturer_code', []],
      ['x-kom_code', []],
    ]),
  }),
);

export default mockedProducts;
