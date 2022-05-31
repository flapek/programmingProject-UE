import { Product } from '../Types';
import { faker } from '@faker-js/faker';

const mockedProducts: Product[] = [...new Array(50)].map(() => ({
  name: faker.commerce.productName(),
  gpu: faker.commerce.productName(),
  image: faker.commerce.productName(),
  price: [...new Array(60)].map(() => ({
    value: faker.commerce.price(
      faker.datatype.number({ min: 20, max: 80 }),
      faker.datatype.number({ min: 80, max: 180 }),
      2,
    ),
    data: faker.date.soon(),
  })),
  specification: new Map<string, string[]>([
    [faker.datatype.string(), ['asd', 'vdff']],
    [faker.datatype.string(), ['a']],
    [faker.datatype.string(), ['vsfgew', 'qe']],
    [faker.datatype.string(), ['wqerew']],
  ]),
}));

export default mockedProducts;
