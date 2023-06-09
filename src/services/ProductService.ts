import { NotifyStore } from "@stores/NotifyStore";
import { ProductStore } from "@stores/ProductStore";

import ProductRepository from "@/repository/ProductRepository";
import { navigate } from "@/routes";
import { errorContactDev } from "@/utils/Messages";

export const ProducService = async (data: { name: string }) => {
  if (!data.name) {
    alert("Necessário preencher o campo corretamente");
    return false;
  } else if (data.name.length <= 2) {
    alert("O nome do produto precisa de no minimo 3 caracteres");
    return false;
  }

  try {
    const insert = await ProductRepository.create(data);

    ProductStore().updateList({ id: insert.id as string, name: data.name });
    NotifyStore().setMessage(
      `Produto ${data.name} cadastrado com Sucesso!`,
      "success"
    );

    data.name = "";
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};

export const ProductUpdateService = async (data: {
  name: string;
  id: string;
}) => {
  if (!data.name) {
    alert("Necessário preencher o campo corretamente");
    return false;
  } else if (data.name.length <= 2) {
    alert("O nome do produto precisa de no minimo 3 caracteres");
    return false;
  }

  try {
    const insert = await ProductRepository.update(data);
    console.log(insert);

    NotifyStore().setMessage(
      `Produto ${data.name} modificado com Sucesso!`,
      "success"
    );

    ProductStore()
      .updateProduct({ name: data.name, id: data.id })
      .finally(() => navigate("/produtos"));
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};
