<template>
  <MainContainer>
    <FormContainer>
      <Input
        v-on:get-value="(e) => (data.product = e)"
        :value="data.product"
        label="Produto"
        input-size="w-[47%]"
      />
      <Input
        v-on:get-value="(e) => (data.amount = e)"
        :value="data.amount"
        label="Quantidade"
        input-size="w-[47%]"
      />
      <Select label="Motorista" input-size="w-[47%]" :data="Drivers" />
      <Select label="Rota" input-size="w-[47%]" :data="data.showroute" />
      <Select label="Veículo" input-size="w-[47%]" :data="data.showmount" />
      <Input
        v-on:get-value="(e) => (data.Date = e)"
        :value="data.Date"
        label="Data"
        input-size="w-[47%]"
      />
      <Input
        v-on:get-value="(e) => (data.Hour = e)"
        :value="data.Hour"
        label="Horário"
        input-size="w-[47%]"
      />
      <Select label="Cliente" input-size="w-[47%]" :data="data.showclient" />
    </FormContainer>
    <Table>
      <RowCommom :qtd="true" />
      <RowAdd
        v-for="(item, i) in allProducts"
        :key="i"
        :name="item.name"
        :id="item.id"
        :qtd="true"
      />
    </Table>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import RowAdd from "@components/Tables/RowAdd.vue";
import RowCommom from "@components/Tables/RowCommom.vue";
import Table from "@components/Form/Table.vue";
import Input from "@components/Form/Input.vue";
import Select from "@components/Form/Select.vue";
import { reactive, onMounted, ref, watch } from "vue";
import { ProductStore } from "@stores/ProductStore";
import { iDriverDTO } from "@/interface/DriverInterfaces";
import { DriverStore } from "@stores/DriverStore";

const allProducts = ref<{ name: string; id: string }[]>([]);
const Drivers = ref<iDriverDTO[]>([]);

type iData = {
  product: string;
  amount: string;
  Date: string;
  Hour: string;
  showdriver: any[];
  showroute: any[];
  showmount: any[];
  showclient: any[];
};

const data = reactive<iData>({
  product: "",
  amount: "",
  Date: "",
  Hour: "",
  showdriver: [
    { id: "test", name: "josé" },
    { id: "testII", name: "joão" },
  ],
  showroute: [
    { id: "test", name: "Rota 1" },
    { id: "testII", name: "Rota 2" },
  ],
  showmount: [
    { id: "test", name: "car 1" },
    { id: "testII", name: "car 2" },
  ],
  showclient: [
    { id: "test", name: "client 1" },
    { id: "testII", name: "client 2" },
  ],
});

watch(
  () => DriverStore().drivers,
  () => {
    Drivers.value = DriverStore().getAll;
  }
);

onMounted(async () => {
  (await ProductStore().findAll()) as any;
  allProducts.value = ProductStore().all;
  await DriverStore().findAll();
});
</script>
