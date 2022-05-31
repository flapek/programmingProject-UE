import { Price } from '.';

export default interface Product {
  name: string;
  gpu: string;
  image: string;
  price: Price[];
  ray_tracing: string;
  type_of_connector: string;
  memory: string;
  type_of_memory: string;
  effective_memory_timing: string;
  core_clock: string;
  CUDA_cores: string;
  cooling_type: string;
  types_of_outputs: string;
  supported_libraries: string;
  power_supply_connector: string;
  recommended_power_supply: string;
  power_consumption: string;
  length: string;
  width: string;
  height: string;
  warranty: string;
  manufacturer_code: string;
  xkom_code: string;
}
