<template>
  <MainContainer>
    <ConfirmModal
      v-on:action-modal="setModalConfirm"
      v-on:confirm-event="() => modalConfirm(true, sendEdition)"
      v-on:exclude-event="() => modalConfirm(false, sendEdition)"
    />
    <FormContainer v-on:form-submit="handleSubmit" :btn-send-value="btnValue">
      <Input
        v-on:get-value="(e:string) => data.name = e"
        :value="data.name"
        label="Nome Completo"
        input-size="w-full"
      />
      <Input
        v-on:get-value="(e:string) => data.cpf = e"
        :value="data.cpf"
        label="CNH"
        input-size="w-[47%]"
      />
      <Input
        v-on:get-value="(e:string) => data.cnh = e"
        :value="data.cnh"
        label="CPF"
        input-size="w-[47%]"
      />
      <Input
        v-on:get-value="(e:string) => data.street = e"
        :value="data.street"
        label="Rua"
        input-size="w-full"
      />
      <Input
        v-on:get-value="(e:string) => data.number = e"
        :value="data.number"
        label="Bairro"
        input-size="w-[47%]"
      />
      <Input
        v-on:get-value="(e:string) => data.district = e"
        :value="data.district"
        label="Nº"
        input-size="w-[30%]"
      />
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import ConfirmModal from "@/components/Modals/Confirm.vue";
import Input from "@components/Form/Input.vue";
import { reactive, ref, onMounted } from "vue";
import { iDriverDTO } from "@/interface/DriverInterface";
import {
  DriverCreateService,
  DriverUpdateService,
} from "@/services/DriverServices";
import {
  modalActive,
  modalConfirm,
  setModalConfirm,
} from "@/services/Modal/actionConfirm";
import { routerQuery } from "@/routes";
import { DriverStore } from "@/stores/DriverStore";

const id = ref<string>("");
const btnValue = ref<string>("");

const data = reactive<Omit<iDriverDTO, "id">>({
  name: "",
  cpf: "",
  cnh: "",
  street: "",
  number: "",
  district: "",
});

const handleSubmit = async () => {
  if (!routerQuery().type || routerQuery().type != "edit")
    DriverCreateService(data);
  else modalActive.value(true);
};

const sendEdition = async () => {
  await DriverUpdateService({ ...data, id: id.value });
};

onMounted(async () => {
  const store = DriverStore();
  if (routerQuery().type == "edit") {
    data.cnh = store.getCurrent?.cnh as string;
    data.cpf = store.getCurrent?.cpf as string;
    data.district = store.getCurrent?.district as string;
    data.name = store.getCurrent?.name as string;
    data.number = store.getCurrent?.number as string;
    data.street = store.getCurrent?.street as string;
    id.value = store.getCurrent?.id as string;
    btnValue.value = "Editar";
  }
});
</script>
