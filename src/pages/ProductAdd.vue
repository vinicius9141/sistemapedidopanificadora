<template>
  <MainContainer>
    <ConfirmModal
      v-on:action-modal="setModalConfirm"
      v-on:confirm-event="() => modalConfirm(true, sendEdition)"
      v-on:exclude-event="() => modalConfirm(false, sendEdition)"
    />
    <FormContainer v-on:form-submit="handleSubmit" :btn-send-value="btnValue">
      <Input
        label="Nome do produto"
        input-size="w-full"
        v-on:get-value="(e:any) => (data.name = e)"
        :value="data.name"
      />
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import ConfirmModal from "@/components/Modals/Confirm.vue";
import Input from "@components/Form/Input.vue";
import { reactive, onMounted, ref } from "vue";
import {
  ProducService,
  ProductUpdateService,
} from "@/services/ProductService.ts";
import { routerQuery } from "@/routes";
import { ProductStore } from "@stores/ProductStore";
import {
  modalActive,
  modalConfirm,
  setModalConfirm,
} from "@/services/Modal/actionConfirm";

const data = reactive({
  name: "",
});
const id = ref<string>("");
const btnValue = ref<string>("");
const handleSubmit = async () => {
  if (!routerQuery().type || routerQuery().type != "edit") ProducService(data);
  else modalActive.value(true);
};

const sendEdition = async () =>
  await ProductUpdateService({ id: id.value, name: data.name });

onMounted(async () => {
  const store = ProductStore();
  if (routerQuery().type == "edit") {
    data.name = store.getCurrent.name;
    id.value = store.getCurrent.id;
    btnValue.value = "Editar";
  }
});
</script>
