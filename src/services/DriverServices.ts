import { NotifyStore } from "@stores/NotifyStore";

import { iDriverDTO } from "@/interface/DriverInterface";
import DriverRepository from "@/repository/DriverRepository";
import { navigate } from "@/routes";
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
    store.updateDriverList({ ...data, id: inserted.id });
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

export const DriverUpdateService = async (data: iDriverDTO) => {
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
    await DriverRepository.update(data);

    NotifyStore().setMessage(`Edição realizada com sucesso!`, "warning");

    DriverStore()
      .updateDriver(data)
      .finally(() => {
        setTimeout(() => {
          navigate("/motoristas");
        }, 3000);
      });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};

export const DriverRemoveService = async () => {
  const data = DriverStore().getCurrent as iDriverDTO;

  try {
    await DriverRepository.destroy({ id: data.id });

    NotifyStore().setMessage(`Removido com Sucesso!`, "success");

    DriverStore().removeDriver({ id: data.id });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};
