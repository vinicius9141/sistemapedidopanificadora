export interface iVehicleDTO {
  id: string;
  name: string;
  model: string;
  brand: string;
  licensePlate: string;
  Renavam: string;
}

export interface iVehicleRepository {
  create(data: Omit<iVehicleDTO, "id">): Promise<iVehicleDTO>;
}
