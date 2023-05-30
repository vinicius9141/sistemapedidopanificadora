<template>
  <MainContainer>
    <FormContainer v-on:form-submit="handleSubmit">
      <Input
        label="Nome"
        input-size="w-full"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <Input
        label="Modelo"
        input-size="w-full"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <Input
        label="Marca"
        input-size="w-full"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <Input
        label="Placa"
        input-size="w-full"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <Input
        label="Renavam"
        input-size="w-full"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Input from "@components/Form/Input.vue";
import { reactive } from "vue";
const data = reactive({
  name: "",
});

const handleSubmit = () => {};
</script>
