import { NotifyStore } from "@stores/NotifyStore";
import { ProductStore as store } from "@stores/ProductStore";

import ProductRepository from "@/repository/ProductRepository";
import { errorContactDev } from "@/utils/Messages";

export const ProductStore = async (data: { name: string }) => {
  if (!data.name) {
    alert("Necessário preencher o campo corretamente");
    return false;
  } else if (data.name.length <= 2) {
    alert("O nome do produto precisa de no minimo 3 caracteres");
    return false;
  }

  try {
    const insert = await ProductRepository.create(data);

    store().updateList({ id: insert.id as string, name: data.name });
    NotifyStore().setMessage(
      `Produto ${data.name} cadastrado com Sucesso!`,
      "success"
    );

    data.name = "";
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};
