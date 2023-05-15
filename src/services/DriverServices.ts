import { iDriverDTO } from "@/interface/DriverInterfaces";
import DriverRepository from "@/repository/DriverRepository";

export const DriverCreateService = async (
  data: Omit<iDriverDTO, "id">
): Promise<void> => {
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

  const inserted = await DriverRepository.create(data);

  if (!inserted) {
    alert(
      "Houve um erro, tente novamente em instantes ou entre em contato com o desenvolvedor."
    );
    return;
  }
};
