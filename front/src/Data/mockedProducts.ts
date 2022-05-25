import { Product } from '../Types';
import { faker } from '@faker-js/faker';

const mockedProducts: Product[] = [...new Array(50)].map(() => ({
  Name: faker.commerce.productName(),
  Prices: [...new Array(60)].map(() => ({
    Value: faker.commerce.price(
      faker.datatype.number({ min: 20, max: 80 }),
      faker.datatype.number({ min: 80, max: 180 }),
      2,
    ),
    Data: faker.date.soon(),
  })),
  Specification: new Map<string, string[]>([
    [faker.datatype.string(), ['asd', 'vdff']],
    [faker.datatype.string(), ['a']],
    [faker.datatype.string(), ['vsfgew', 'qe']],
    [faker.datatype.string(), ['wqerew']],
  ]),
}));

export default mockedProducts;
