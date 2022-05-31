import { Product } from '../Types';
import { faker } from '@faker-js/faker';

const mockedProducts: Product[] = [...new Array(50)].map(() => ({
  name: faker.commerce.productName(),
  gpu: faker.commerce.productName(),
  image: faker.commerce.productName(),
  price: [...new Array(60)].map(() => ({
    Value: faker.commerce.price(
      faker.datatype.number({ min: 20, max: 80 }),
      faker.datatype.number({ min: 80, max: 180 }),
      2,
    ),
    Data: faker.date.soon(),
  })),
  ray_tracing: faker.datatype.string(),
  type_of_connector: faker.datatype.string(),
  memory: faker.datatype.string(),
  type_of_memory: faker.datatype.string(),
  effective_memory_timing: faker.datatype.string(),
  core_clock: faker.datatype.string(),
  CUDA_cores: faker.datatype.string(),
  cooling_type: faker.datatype.string(),
  types_of_outputs: faker.datatype.string(),
  supported_libraries: faker.datatype.string(),
  power_supply_connector: faker.datatype.string(),
  recommended_power_supply: faker.datatype.string(),
  power_consumption: faker.datatype.string(),
  length: faker.datatype.string(),
  width: faker.datatype.string(),
  height: faker.datatype.string(),
  warranty: faker.datatype.string(),
  manufacturer_code: faker.datatype.string(),
  xkom_code: faker.datatype.string(),
}));

export default mockedProducts;
