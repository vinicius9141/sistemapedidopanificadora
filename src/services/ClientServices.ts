import { NotifyStore } from "@stores/NotifyStore";

import { iClientDTO } from "@/interface/ClientInterface";
import DriverRepository from "@/repository/ClientRepository";
import { ClientStore } from "@/stores/ClientStore";
import { errorContactDev } from "@/utils/Messages";

export const ClientCreateService = async (
  data: Omit<iClientDTO, "id">
): Promise<void> => {
  console.log(data);
  const store = ClientStore();
  if (!data.name || !data.cnpj || !data.corporateName || !data.routeName) {
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

    data.name = "";
    data.cnpj = "";
    data.corporateName = "";
    data.routeName = "";
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");

    console.log(error);
    return;
  }
};
