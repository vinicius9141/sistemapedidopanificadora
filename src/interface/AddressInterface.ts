export interface iAddressForm {
  street: string;
  destrict: string;
  number: string;
}

export interface iAddressDTO {
  id: string;
  name: string;
  addresses: iAddressForm[];
}

export interface iEndressRepository {
  create(data: Omit<iAddressDTO, "id">): Promise<iAddressDTO>;
}
