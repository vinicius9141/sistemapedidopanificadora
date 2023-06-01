import { iAddressDTO } from "./AddressInterface";
import { iClientDTO } from "./ClientInterface";
import { iDriverDTO } from "./DriverInterface";
import { iVehicleDTO } from "./VeichlesInterface";

export interface iTocketOrderDTO {
  id: string;
  date: string;
  hour: string;
  driver: iDriverDTO;
  products: any;
  address: iAddressDTO;
  vehicle: iVehicleDTO;
  client: iClientDTO;
}

export interface iTocketOrderRepository {
  create(data: Omit<iTocketOrderDTO, "id">): Promise<iTocketOrderDTO>;
}
