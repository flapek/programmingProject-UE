import { Price } from '.';

export default interface Product {
  name: string;
  gpu: string;
  image: string;
  price: Price[];
  specification: Map<string, string>;
}
