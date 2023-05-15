import { iDriverDTO } from "@/interface/DriverInterfaces";
import DriverRepository from "@/repository/DriverRepository";
import { DriverStore } from "@/stores/DriverStore";

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
  } catch (error) {
    alert(
      "Houve um erro, tente novamente em instantes ou entre em contato com o desenvolvedor."
    );
    console.log(error);
    return;
  }
};
