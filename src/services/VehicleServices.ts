import { NotifyStore } from "@stores/NotifyStore";

import { iVehicleDTO } from "@/interface/VeichlesInterface";
import VehicleRepository from "@/repository/VehicleRepository";
import { navigate } from "@/routes";
import { VehicleStore } from "@/stores/VehicleStore";
import { errorContactDev } from "@/utils/Messages";

export const VehicleCreateService = async (
  data: Omit<iVehicleDTO, "id">
): Promise<void> => {
  const store = VehicleStore();
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

export const vehicleUpdateService = async (data: iVehicleDTO) => {
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
    await VehicleRepository.update(data);

    NotifyStore().setMessage(`Edição realizada com sucesso!`, "warning");

    VehicleStore()
      .updateVehicle(data)
      .finally(() => {
        setTimeout(() => {
          navigate("/veiculos");
        }, 3000);
      });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};

export const vehicleRemoveService = async () => {
  const data = VehicleStore().getCurrent as iVehicleDTO;

  try {
    await VehicleRepository.destroy({ id: data.id });

    NotifyStore().setMessage(`Removido com Sucesso!`, "success");

    VehicleStore().removeVehicle();
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};
