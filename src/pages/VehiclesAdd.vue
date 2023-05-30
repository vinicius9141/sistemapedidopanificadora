<template>
  <MainContainer>
    <FormContainer v-on:form-submit="() => VehicleCreateService(data)">
      <Input
        label="Nome"
        input-size="w-full"
        v-on:get-value="
          (e) => {
            data.name = e;
          }
        "
        :value="data.name"
      />
      <Input
        label="Modelo"
        input-size="w-full"
        v-on:get-value="
          (e) => {
            data.model = e;
          }
        "
        :value="data.model"
      />
      <Input
        label="Marca"
        input-size="w-full"
        v-on:get-value="
          (e) => {
            data.brand = e;
          }
        "
        :value="data.brand"
      />
      <Input
        label="Placa"
        input-size="w-full"
        v-on:get-value="
          (e) => {
            data.licensePlate = e;
          }
        "
        :value="data.licensePlate"
      />
      <Input
        label="Renavam"
        input-size="w-full"
        v-on:get-value="
          (e) => {
            data.Renavam = e;
          }
        "
        :value="data.Renavam"
      />
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Input from "@components/Form/Input.vue";
import { reactive } from "vue";
import { VehicleCreateService } from "@/services/VehicleServices";
const data = reactive({
  name: "",
  model: "",
  brand: "",
  licensePlate: "",
  Renavam: "",
});
</script>
