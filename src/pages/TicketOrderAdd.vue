<template>
  <MainContainer>
    <FormContainer>
      <Input label="Produto" input-size="w-[47%]" />
      <Input label="Quantidade" input-size="w-[47%]" />
      <Select label="Motorista" input-size="w-[47%]" :data="data.driver" />
      <Select label="Rota" input-size="w-[47%]" :data="data.route" />
      <Select label="Veículo" input-size="w-[47%]" :data="data.mount" />
      <Input label="Data" input-size="w-[47%]" />
      <Input label="Horário" input-size="w-[47%]" />
      <Select label="Cliente" input-size="w-[47%]" :data="data.client" />
    </FormContainer>
    <Table>
      <RowCommom :qtd="true" />
      <RowAdd name="Pão Francês" id="12563248" :qtd="true" />
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
import { reactive } from "vue";

const data = reactive({
  driver: [
    { id: "test", name: "josé" },
    { id: "testII", name: "joão" },
  ],
  route: [
    { id: "test", name: "Rota 1" },
    { id: "testII", name: "Rota 2" },
  ],
  mount: [
    { id: "test", name: "car 1" },
    { id: "testII", name: "car 2" },
  ],
  client: [
    { id: "test", name: "client 1" },
    { id: "testII", name: "client 2" },
  ],
});
</script>
