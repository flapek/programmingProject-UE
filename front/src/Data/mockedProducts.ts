import { Product } from '../Types';
import { faker } from '@faker-js/faker';

const mockedProducts: Product[] = [
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
  {
    Name: faker.commerce.productName(),
    Prices: [
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
      {
        Value: faker.commerce.price(50, 1000, 2),
        Data: faker.date.soon(),
      },
    ],
    Specification: new Map<string, string[]>([
      [faker.datatype.string(), ['asd', 'vdff']],
      [faker.datatype.string(), ['a']],
      [faker.datatype.string(), ['vsfgew', 'qe']],
      [faker.datatype.string(), ['wqerew']],
    ]),
  },
];

export default mockedProducts;
