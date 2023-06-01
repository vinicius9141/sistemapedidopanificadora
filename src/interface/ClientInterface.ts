import { iAddressForm } from "./AddressInterface";

export interface iClientDTO {
  id: string;
  name: string;
  cnpj: string;
  corporateName: string;
  routeName: iAddressForm[];
}

export interface iClientRepository {
  findAll(): Promise<void>;
  create(data: Omit<iClientDTO, "id">): Promise<iClientDTO>;
}
