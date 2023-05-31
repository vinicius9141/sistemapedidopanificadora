<template>
  <MainContainer>
    <FormContainer v-on:form-submit="() => ClientCreateService(data)">
      <Input
        label="Nome do Cliente"
        input-size="w-full"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <Input
        label="CNPJ"
        input-size="w-6/12"
        v-on:get-value="(e) => (data.cnpj = e)"
        :value="data.cnpj"
      />
      <Input
        label="Razão Social"
        input-size="w-5/12"
        v-on:get-value="(e) => (data.corporateName = e)"
        :value="data.corporateName"
      />
      <Select
        :data="selectData"
        label="Rota"
        input-size="w-full"
        v-on:get-value="(e) => (data.routeName = e)"
      />
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Input from "@components/Form/Input.vue";
import Select from "@components/Form/Select.vue";
import { onMounted, reactive, ref, watch } from "vue";
import { AddressStore } from "@/stores/AddressStore";
import { iClientDTO } from "@/interface/ClientInterface";
import { ClientCreateService } from "@services/ClientServices";

const data = reactive<Omit<iClientDTO, "id">>({
  name: "",
  cnpj: "",
  corporateName: "",
  routeName: "",
});

const selectData = ref<{ id: string; name: string }[]>([
  { id: "string", name: "string" },
]);

onMounted(async () => {
  await AddressStore().findAll();
});

watch(
  () => AddressStore().getAll,
  () => {
    selectData.value = AddressStore().getAll;
    data.routeName = AddressStore().getAll[0] as any as string;
  }
);
</script>
