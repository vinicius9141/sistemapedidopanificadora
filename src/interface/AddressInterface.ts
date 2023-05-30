export interface iAddressDTO {
  name: string;
  cnh: string;
  cpf: string;
  street: string;
  district: string;
  number: string;
  id: string;
}

export interface iEndressRepository {
  create(data: Omit<iAddressDTO, "id">): Promise<iAddressDTO>;
}
