import { NotifyStore } from "@stores/NotifyStore";

import { iAddressDTO } from "@/interface/AddressInterface";
import AddressRepository from "@/repository/AddressRepository";
import { navigate } from "@/routes";
import { AddressStore } from "@/stores/AddressStore";
import { errorContactDev } from "@/utils/Messages";

export const AddressCreateService = async (
  data: Omit<iAddressDTO, "id">
): Promise<boolean> => {
  const store = AddressStore();
  if (!data.name || !data.addresses) {
    alert("Todos os campos precisam ser preenchidos corretamente!");
    return false;
  }

  try {
    const inserted = await AddressRepository.create(data);
    console.log(inserted);
    store.updateList({ ...data, id: inserted.id });
    NotifyStore().setMessage(
      `Rota ${data.name} cadastrado com Sucesso!`,
      "success"
    );

    data.name = "";
    data.addresses = [];
    return true;
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");

    console.log(error);
    return false;
  }
};

export const addressUpdateService = async (data: iAddressDTO) => {
  if (!data.name || !data.addresses) {
    alert("Todos os campos precisam ser preenchidos corretamente!");
    return;
  }

  try {
    await AddressRepository.update(data);

    NotifyStore().setMessage(`Edição realizada com sucesso!`, "warning");

    AddressStore()
      .updateAddress(data)
      .finally(() => {
        setTimeout(() => {
          navigate("/rotas");
        }, 3000);
      });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};

export const addressRemoveService = async () => {
  const data = AddressStore().getCurrent as iAddressDTO;

  try {
    await AddressRepository.destroy({ id: data.id });

    NotifyStore().setMessage(`Removido com Sucesso!`, "success");

    AddressStore().removeAddress({ id: data.id });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};
