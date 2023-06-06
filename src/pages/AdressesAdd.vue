<template>
  <MainContainer>
    <FormContainer v-on:form-submit="handleSubmit">
      <Input
        label="Nome da Rota"
        input-size="w-full"
        v-on:get-value="
          (e) => {
            data.name = e;
          }
        "
        :value="data.name"
      />
      <div class="w-full flex flex-wrap justify-center items-center">
        <Input
          label="Rua"
          input-size="w-full"
          v-on:get-value="
            (e) => {
              AddressInput.street = e;
            }
          "
          :value="AddressInput.street"
        />

        <Input
          label="Bairro"
          input-size="w-5/12"
          v-on:get-value="
            (e) => {
              AddressInput.destrict = e;
            }
          "
          :value="AddressInput.destrict"
        />
        <Input
          label="Número"
          input-size="w-5/12"
          v-on:get-value="
            (e) => {
              AddressInput.number = e;
            }
          "
          :value="AddressInput.number"
        />
        <Input
          label=""
          input-size="w-5/12 hidden"
          v-on:get-value="
            (e) => {
              indexUpdate = e;
            }
          "
          :value="indexUpdate"
        />
        <button
          type="button"
          class="w-6/12 bg-blue-300 py-2 font-bold text-white self-center mt-6"
          @click="moreAddressForm"
        >
          {{
            indexUpdate == null
              ? "Adicionar novo endereço"
              : "Atualizar Endereço"
          }}
        </button>
      </div>
      <div
        class="w-full mt-3 text-black p-2 bg-white flex justify-between items-center border-b border-slate-300"
        v-for="(address, i) in data.addresses"
        :key="i"
      >
        <p>
          {{ address.street }} - {{ address.number }},
          {{ address.street }}
        </p>
        <div>
          <button
            type="button"
            @click="() => edtAddressForm(i)"
            class="bg-yellow-300 py-1 px-2 text-lg mr-2"
          >
            edt
          </button>
          <button
            type="button"
            @click="() => rmAddressForm(i)"
            class="bg-red-300 py-1 px-2 text-lg"
          >
            rm
          </button>
        </div>
      </div>
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Input from "@components/Form/Input.vue";
import { reactive, ref } from "vue";
import { AddressCreateService } from "@services/AddressServices";

type iAddressForm = {
  street: string;
  destrict: string;
  number: string;
};

const data = reactive({
  name: "",
  addresses: [] as iAddressForm[],
});

const indexUpdate = ref<number | null>(null);

const AddressInput = ref<Omit<iAddressForm, "index">>({
  street: "",
  destrict: "",
  number: "",
});

const rmAddressForm = (i: number) => {
  data.addresses.splice(i, 1);
};

const edtAddressForm = (i: number) => {
  AddressInput.value.street = data.addresses[i].street;
  AddressInput.value.destrict = data.addresses[i].destrict;
  AddressInput.value.number = data.addresses[i].number;
  indexUpdate.value = i;
};

const moreAddressForm = () => {
  if (
    !AddressInput.value.street ||
    !AddressInput.value.destrict ||
    !AddressInput.value.number
  ) {
    alert("Preencha todos os campos!");
    return;
  }
  console.log(indexUpdate.value);
  if (indexUpdate.value == null) {
    data.addresses.push({ ...AddressInput.value });
  } else {
    data.addresses[indexUpdate.value] = { ...AddressInput.value };
  }

  AddressInput.value.street = "";
  AddressInput.value.number = "";
  AddressInput.value.destrict = "";
  indexUpdate.value = null;
};

const handleSubmit = async () => {
  const result = await AddressCreateService(data);
  if (result) {
    AddressInput.value.street = "";
    AddressInput.value.number = "";
    AddressInput.value.destrict = "";
  }
};
</script>
