import { NotifyStore } from "@stores/NotifyStore";

import { iVehicleDTO } from "@/interface/VeichlesInterface";
import VehicleRepository from "@/repository/VehicleRepository";
import { VeichleStore } from "@/stores/VehicleStore";
import { errorContactDev } from "@/utils/Messages";

export const VehicleCreateService = async (
  data: Omit<iVehicleDTO, "id">
): Promise<void> => {
  const store = VeichleStore();
  if (
    !data.name ||
    !data.brand ||
    !data.model ||
    !data.licensePlate ||
    !data.Renavam
  ) {
    alert("Todos os campos precisam ser preenchidos corretamente!");
    return;
  }

  try {
    const inserted = await VehicleRepository.create(data);
    console.log(inserted);
    store.updateList({ ...data, id: inserted.id });
    NotifyStore().setMessage(
      `Veiculo ${data.name} cadastrado com Sucesso!`,
      "success"
    );

    data.name = "";
    data.brand = "";
    data.model = "";
    data.licensePlate = "";
    data.Renavam = "";
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");

    console.log(error);
    return;
  }
};
