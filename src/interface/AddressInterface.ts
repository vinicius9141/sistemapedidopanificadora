export interface iAddressDTO {
  id: string;
  name: string;
  addresses: string;
}

export interface iEndressRepository {
  create(data: Omit<iAddressDTO, "id">): Promise<iAddressDTO>;
}
