export interface iDriverDTO {
  name: string;
  cnh: string;
  cpf: string;
  street: string;
  district: string;
  number: number;
  id: string;
}

export interface iDriverRepository {
  create(data: Omit<iDriverDTO, "id">): Promise<iDriverDTO>;
}
