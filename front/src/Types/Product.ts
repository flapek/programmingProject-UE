import { Price } from '.';

export default interface Product {
  Name: string;
  Prices: Price[];
  Specification: Map<string, string[]>;
}
