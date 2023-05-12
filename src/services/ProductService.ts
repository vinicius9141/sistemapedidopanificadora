import ProductRepository from "@/repository/impl/ProductRepository";

export const ProductStore = async (data: { name: string }) => {
  if (!data.name) {
    alert("Necessário preencher o campo corretamente");
    return false;
  } else if (data.name.length <= 2) {
    alert("O nome do produto precisa de no minimo 3 caracteres");
    return false;
  }

  const insert = await ProductRepository.create(data);

  if (!insert.id) {
    alert(
      "Houve um erro, tente novamente em alguns instantes, caso o erro continue entre em contato com o desenvolvedor! "
    );
    return false;
  }

  data.name = "";
  return true;
};
