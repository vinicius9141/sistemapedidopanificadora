import { NotifyStore } from "@stores/NotifyStore";

import { iTocketOrderDTO } from "@/interface/TicketOrderInterface";
import TicketOrderRepository from "@/repository/TicketOrderRepository";
import { TicketOrderStore } from "@/stores/TicketOrderStore";
import { errorContactDev } from "@/utils/Messages";

export const TicketCreateService = async (
  data: Omit<iTocketOrderDTO, "id">
): Promise<void> => {
  const store = TicketOrderStore();
  console.log(data);
  if (
    !data.date ||
    !data.hour ||
    data.products.length <= 0 ||
    Object.values(data.address).length <= 1 ||
    Object.values(data.client).length <= 1 ||
    Object.values(data.vehicle).length <= 1 ||
    Object.values(data.driver).length <= 1
  ) {
    alert("Todos os campos precisam ser preenchidos corretamente!");
    return;
  }

  try {
    const inserted = await TicketOrderRepository.create(data);
    console.log(inserted);
    store.updateList({ ...data, id: inserted.id });
    NotifyStore().setMessage(
      `Ordem de serviço cadastrado com Sucesso!`,
      "success"
    );

    data.hour = "";
    data.date = "";
    data.products = {};
  } catch (error) {
    NotifyStore().setMessage(errorContactDev, "danger");

    console.log(error);
    return;
  }
};
