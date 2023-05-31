export interface iClientDTO {
  id: string;
  name: string;
  cnpj: string;
  corporateName: string;
  routeName: string;
}

export interface iClientRepository {
  findAll(): Promise<void>;
  create(data: Omit<iClientDTO, "id">): Promise<iClientDTO>;
}
