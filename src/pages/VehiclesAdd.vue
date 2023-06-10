<template>
  <MainContainer>
    <ConfirmModal
      v-on:action-modal="setModalConfirm"
      v-on:confirm-event="() => modalConfirm(true, sendEdition)"
      v-on:exclude-event="() => modalConfirm(false, sendEdition)"
    />
    <FormContainer v-on:form-submit="handleSubmit" :btn-send-value="btnValue">
      <Input
        label="Nome"
        input-size="w-full"
        v-on:get-value="
          (e: any) => {
            data.name = e;
          }
        "
        :value="data.name"
      />
      <Input
        label="Modelo"
        input-size="w-full"
        v-on:get-value="
          (e: any) => {
            data.model = e;
          }
        "
        :value="data.model"
      />
      <Input
        label="Marca"
        input-size="w-full"
        v-on:get-value="
          (e: any) => {
            data.brand = e;
          }
        "
        :value="data.brand"
      />
      <Input
        label="Placa"
        input-size="w-full"
        v-on:get-value="
          (e: any) => {
            data.licensePlate = e;
          }
        "
        :value="data.licensePlate"
      />
      <Input
        label="Renavam"
        input-size="w-full"
        v-on:get-value="
          (e: any) => {
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
import ConfirmModal from "@/components/Modals/Confirm.vue";
import {
  modalActive,
  modalConfirm,
  setModalConfirm,
} from "@/services/Modal/actionConfirm";
import { reactive, ref, onMounted } from "vue";
import {
  VehicleCreateService,
  vehicleUpdateService,
} from "@/services/VehicleServices";
import { routerQuery } from "@/routes";
import { iVehicleDTO } from "@/interface/VeichlesInterface";
import { VehicleStore } from "@/stores/VehicleStore";
let data = reactive({
  name: "",
  model: "",
  brand: "",
  licensePlate: "",
  Renavam: "",
});

const id = ref<string>("");
const btnValue = ref<string>("");

const handleSubmit = async () => {
  if (!routerQuery().type || routerQuery().type != "edit")
    VehicleCreateService(data);
  else modalActive.value(true);
};

const sendEdition = async () => {
  await vehicleUpdateService({ ...data, id: id.value });
};

onMounted(async () => {
  const store = VehicleStore();
  if (routerQuery().type == "edit") {
    data = store.getCurrent as iVehicleDTO;
    id.value = store.getCurrent?.id as string;
    btnValue.value = "Editar";
  }
});
</script>
