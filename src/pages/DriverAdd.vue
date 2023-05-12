<template>
  <MainContainer>
    <FormContainer v-on:form-submit="handleSubmit">
      <Input label="Nome Completo" input-size="w-full" />
      <Input label="CNH" input-size="w-[47%]" />
      <Input label="CPF" input-size="w-[47%]" />
      <Input label="Rua" input-size="w-full" />
      <Input label="Bairro" input-size="w-[47%]" />
      <Input label="Nº" input-size="w-[30%]" />
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Input from "@components/Form/Input.vue";

const handleSubmit = () => {
  alert("Cadastrou Motorista");
};
</script>
