import { NotifyStore } from "@stores/NotifyStore";

import { iDriverDTO } from "@/interface/DriverInterfaces";
import DriverRepository from "@/repository/DriverRepository";
import { DriverStore } from "@/stores/DriverStore";
import { errorContactDev } from "@/utils/Messages";

export const DriverCreateService = async (
  data: Omit<iDriverDTO, "id">
): Promise<void> => {
  const store = DriverStore();
  if (
    !data.name ||
    !data.cnh ||
    !data.cpf ||
    !data.number ||
    !data.street ||
    !data.district
  ) {
    alert("Todos os campos precisam ser preenchidos corretamente!");
    return;
  }

  try {
    const inserted = await DriverRepository.create(data);
    console.log(inserted);
    store.updateList({ ...data, id: inserted.id });
    NotifyStore().setMessage(
      `Motorista ${data.name} cadastrado com Sucesso!`,
      "success"
    );

    data.cnh = "";
    data.cpf = "";
    data.name = "";
    data.district = "";
    data.street = "";
    data.number = "";
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");

    console.log(error);
    return;
  }
};
