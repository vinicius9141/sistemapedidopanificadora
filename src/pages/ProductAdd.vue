<template>
  <MainContainer>
    <FormContainer v-on:form-submit="handleSubmit">
      <Input
        label="Nome do produto"
        input-size="w-full"
        v-on:get-value="(e) => (data.product = e)"
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
  product: "",
});
const handleSubmit = () => {
  alert(data.product);
};
</script>
