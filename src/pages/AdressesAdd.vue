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
              data.count.street = e;
            }
          "
          :value="data.count.street"
        />

        <Input
          label="Bairro"
          input-size="w-5/12"
          v-on:get-value="
            (e) => {
              data.count.destrict = e;
            }
          "
          :value="data.count.destrict"
        />
        <Input
          label="Número"
          input-size="w-5/12"
          v-on:get-value="
            (e) => {
              data.count.number = e;
            }
          "
          :value="data.count.number"
        />
        <Input
          label=""
          input-size="w-5/12 hidden"
          v-on:get-value="
            (e) => {
              data.count.index = e;
            }
          "
          :value="data.count.index"
        />
        <button
          type="button"
          class="w-6/12 bg-blue-300 py-2 font-bold text-white self-center mt-6"
          @click="moreAddressForm"
        >
          {{
            !data.count.index ? "Adicionar novo endereço" : "Atualizar Endereço"
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
import { reactive } from "vue";
import { AddressCreateService } from "@services/AddressServices";

type iAddressForm = {
  street: string;
  destrict: string;
  number: string;
  index: number | null;
};

const data = reactive({
  name: "",
  count: { street: "", destrict: "", number: "", index: null } as iAddressForm,
  addresses: [] as Omit<iAddressForm, "index">[],
});

const rmAddressForm = (i: number) => {
  data.addresses.splice(i, 1);
};

const edtAddressForm = (i: number) => {
  data.count.street = data.addresses[i].street;
  data.count.destrict = data.addresses[i].destrict;
  data.count.number = data.addresses[i].number;
  data.count.index = i;
};

const moreAddressForm = () => {
  if (!data.count.street || !data.count.destrict || !data.count.number) {
    alert("Preencha todos os campos!");
    return;
  }
  const newData = JSON.parse(JSON.stringify(data.count));
  delete newData.index;

  if (!data.count.index) {
    data.addresses.push(newData);
  } else {
    data.addresses[data.count.index] = newData;
  }

  data.count.street = "";
  data.count.number = "";
  data.count.destrict = "";
  data.count.index = null;
};

const handleSubmit = () => {
  const convert = JSON.stringify(data.addresses) as any as string;
  AddressCreateService({ name: data.name, addresses: convert });
};
</script>
