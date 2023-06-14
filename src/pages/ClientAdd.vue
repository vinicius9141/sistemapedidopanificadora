<template>
  <MainContainer>
    <ConfirmModal
      v-on:action-modal="setModalConfirm"
      v-on:confirm-event="() => modalConfirm(true, sendEdition)"
      v-on:exclude-event="() => modalConfirm(false, sendEdition)"
    />
    <FormContainer
      v-on:form-submit="() => handleSubmit()"
      :btn-send-value="btnValue"
    >
      <Input
        label="Nome do Cliente"
        input-size="w-full"
        v-on:get-value="(e: any) => (data.name = e)"
        :value="data.name"
      />
      <Input
        label="CNPJ"
        input-size="w-6/12"
        v-on:get-value="(e: any) => (data.cnpj = e)"
        :value="data.cnpj"
      />
      <Input
        label="Razão Social"
        input-size="w-5/12"
        v-on:get-value="(e: any) => (data.corporateName = e)"
        :value="data.corporateName"
      />
      <Select
        :data="selectData"
        label="Rota"
        input-size="w-full"
        v-on:get-value="selectRoute"
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
import {
  ClientCreateService,
  ClientUpdateService,
} from "@services/ClientServices";
import { iClientDTO } from "@/interface/ClientInterface";
import ConfirmModal from "@/components/Modals/Confirm.vue";
import {
  modalActive,
  modalConfirm,
  setModalConfirm,
} from "@/services/Modal/actionConfirm";
import { routerQuery } from "@/routes";
import { ClientStore } from "@/stores/ClientStore";

let data = reactive<Omit<iClientDTO, "id">>({
  name: "",
  cnpj: "",
  corporateName: "",
  routeName: [],
});

const id = ref<string>("");
const btnValue = ref<string>("");

const selectData = ref<{ id: string; name: string }[]>([{ id: "", name: "" }]);

const selectRoute = (e: any) => {
  const getSelectRoutes = selectData.value.find((route) => route.id == e);
  data.routeName = getSelectRoutes as any;
};

watch(
  () => AddressStore().getAll,
  () => {
    selectData.value = AddressStore().getAll;

    if (routerQuery().type || routerQuery().type == "edit") {
      const rName = ClientStore().getCurrent?.routeName as any;
      const indexTo = selectData.value.find((item: any, i) => {
        if (item && item.name == rName.name) {
          item["index"] = i;
          return item;
        }
      }) as any;

      selectData.value.splice(indexTo.index, 1);
      delete indexTo.index;
      selectData.value.unshift(indexTo);
    }
    data.routeName = AddressStore().getAll[0] as any;
  }
);

const handleSubmit = async () => {
  if (!routerQuery().type || routerQuery().type != "edit")
    ClientCreateService(data);
  else modalActive.value(true);
};

const sendEdition = async () => {
  await ClientUpdateService({ ...data, id: id.value });
};

onMounted(async () => {
  const store = ClientStore();
  await AddressStore().findAll();

  if (routerQuery().type == "edit") {
    data = store.getCurrent as iClientDTO;
    id.value = store.getCurrent?.id as string;
    btnValue.value = "Editar";
  }
});
</script>
