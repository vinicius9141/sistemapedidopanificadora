<template>
  <MainContainer>
    <FormContainer v-on:form-submit="handleSubmit">
      <Input
        label="Nome do Cliente"
        input-size="w-full"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <Input
        label="CNPJ"
        input-size="w-6/12"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <Input
        label="Razão Social"
        input-size="w-5/12"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <Select :data="selectData" label="Rota" input-size="w-full" />>
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Input from "@components/Form/Input.vue";
import Select from "@components/Form/Select.vue";
import { reactive, ref } from "vue";
const data = reactive({
  name: "",
});

const selectData = ref<{ id: string; name: string }[]>([
  { id: "string", name: "string" },
]);

const handleSubmit = () => {};
</script>
