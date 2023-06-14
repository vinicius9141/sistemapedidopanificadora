import { NotifyStore } from "@stores/NotifyStore";

import { iClientDTO } from "@/interface/ClientInterface";
import DriverRepository from "@/repository/ClientRepository";
import ClientRepository from "@/repository/ClientRepository";
import { navigate } from "@/routes";
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
    data.routeName = [];
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");

    console.log(error);
    return;
  }
};

export const ClientUpdateService = async (data: iClientDTO) => {
  if (!data.name || !data.cnpj || !data.corporateName || !data.routeName) {
    alert("Todos os campos precisam ser preenchidos corretamente!");
    return;
  }

  try {
    await ClientRepository.update(data);

    NotifyStore().setMessage(`Edição realizada com sucesso!`, "success");

    ClientStore()
      .updateClient(data)
      .finally(() => {
        setTimeout(() => {
          navigate("/clientes");
        }, 3000);
      });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};

export const clientRemoveService = async () => {
  const data = ClientStore().getCurrent as iClientDTO;

  try {
    await DriverRepository.destroy({ id: data.id });

    NotifyStore().setMessage(`Removido com Sucesso!`, "success");

    ClientStore().removeClient({ id: data.id });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};
