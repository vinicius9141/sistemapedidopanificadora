<template>
  <MainContainer>
    <FormContainer v-on:form-submit="handleSubmit">
      <Input
        v-on:get-value="(e:string) => driverData.name = e"
        :value="driverData.name"
        label="Nome Completo"
        input-size="w-full"
      />
      <Input
        v-on:get-value="(e:string) => driverData.cpf = e"
        :value="driverData.cpf"
        label="CNH"
        input-size="w-[47%]"
      />
      <Input
        v-on:get-value="(e:string) => driverData.cnh = e"
        :value="driverData.cnh"
        label="CPF"
        input-size="w-[47%]"
      />
      <Input
        v-on:get-value="(e:string) => driverData.street = e"
        :value="driverData.street"
        label="Rua"
        input-size="w-full"
      />
      <Input
        v-on:get-value="(e:string) => driverData.number = e"
        :value="driverData.number"
        label="Bairro"
        input-size="w-[47%]"
      />
      <Input
        v-on:get-value="(e:string) => driverData.district = e"
        :value="driverData.district"
        label="Nº"
        input-size="w-[30%]"
      />
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Input from "@components/Form/Input.vue";
import { reactive } from "vue";
import { iDriverDTO } from "@/interface/DriverInterface";
import { DriverCreateService } from "@/services/DriverServices";

const driverData = reactive<Omit<iDriverDTO, "id">>({
  name: "",
  cpf: "",
  cnh: "",
  street: "",
  number: "",
  district: "",
});

const handleSubmit = async () => {
  DriverCreateService(driverData);
};
</script>
