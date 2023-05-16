<template>
  <button
    @click="addDrivers"
    class="border-2 bg-success border-slate-500 p-2 m-2"
  >
    Adicionar Motoristas Testes
  </button>
  <button @click="deleteAll" class="border-2 border-slate-500 p-2 m-2">
    Remover Tudo
  </button>
</template>
<script lang="ts" setup>
import { fireDatabase } from "@/config/database";
import { doc, deleteDoc } from "firebase/firestore";
import DriverRepository from "@/repository/DriverRepository";
import { DriverStore } from "@stores/DriverStore";
import { ref } from "vue";
import { iDriverDTO } from "@/interface/DriverInterfaces";

const mocDrivers = ref<Omit<iDriverDTO, "id">[]>([
  {
    name: "João",
    cnh: "11111111",
    cpf: "11111111111",
    district: "Bairro 1",
    number: "001",
    street: "Rua 1",
  },
  {
    name: "Romario",
    cnh: "22222222222",
    cpf: "22222222222",
    district: "Bairro 2",
    number: "002",
    street: "Rua 2",
  },
  {
    name: "Rolnaldo",
    cnh: "33333333333",
    cpf: "33333333333",
    district: "Bairro 3",
    number: "003",
    street: "Rua 3",
  },
  {
    name: "Vini",
    cnh: "44444444444",
    cpf: "44444444444",
    district: "Bairro 4",
    number: "004",
    street: "Rua 4",
  },
  {
    name: "Neymar",
    cnh: "55555555555",
    cpf: "55555555555",
    district: "Bairro 5",
    number: "005",
    street: "Rua 5",
  },
  {
    name: "Pelé",
    cnh: "66666666666",
    cpf: "66666666666",
    district: "Bairro 6",
    number: "006",
    street: "Rua 6",
  },
  {
    name: "Messi",
    cnh: "77777777777",
    cpf: "77777777777",
    district: "Bairro 7",
    number: "007",
    street: "Rua 7",
  },
]);

const deleteAll = async () => {
  DriverRepository.findAll().finally(async () => {
    for (let index = 0; index < DriverStore().getAll.length; index++) {
      const element = DriverStore().getAll[index];
      await deleteDoc(doc(fireDatabase, "Drivers", element.id));
      console.log("removido " + element.id);
    }
  });
};

const addDrivers = () => {
  mocDrivers.value.forEach((item) => {
    DriverRepository.create(item);
    console.log("adicionado " + item.name);
  });
};
</script>
