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
    await ProductRepository.update(data);

    NotifyStore().setMessage(
      `Nome do produto modificado com Sucesso para ${data.name}!`,
      "warning"
    );

    ProductStore()
      .updateProduct({ name: data.name, id: data.id })
      .finally(() => {
        setTimeout(() => {
          navigate("/produtos");
        }, 3000);
      });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};

export const ProductRemoveService = async () => {
  const data = ProductStore().getCurrent;

  try {
    await ProductRepository.destroy({ id: data.id });

    NotifyStore().setMessage(
      `Produto ${data.name} removido com Sucesso!`,
      "success"
    );

    ProductStore().removeProduct({ id: data.id });
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");
  }
};
