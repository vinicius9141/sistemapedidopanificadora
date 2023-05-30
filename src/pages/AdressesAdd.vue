<template>
  <MainContainer>
    <FormContainer v-on:form-submit="handleSubmit">
      <Input
        label="Nome da Rota"
        input-size="w-full"
        v-on:get-value="(e) => (data.name = e)"
        :value="data.name"
      />
      <button
        type="button"
        class="w-5/6 bg-blue-300 text-black py-3 text-xl rounded-lg hover:text-white"
        @click="() => data.count.push('')"
      >
        Clique aqui - Adicionar Novo Endereço
      </button>

      <div
        class="w-full flex justify-center items-center"
        v-for="(_, i) in data.count.length"
        :key="i"
      >
        <Input
          v-if="data.count[i] != null"
          :label="`Endereço ` + (i + 1)"
          input-size="w-4/6"
          v-on:get-value="(e) => (data.count[i] = e)"
          :value="data.count[i]"
        />
        <button
          v-if="data.count[i] != null"
          type="button"
          class="w-1/12 bg-blue-300 py-2 font-bold text-white self-center mt-6"
          @click="() => removeInput(i as any as number)"
        >
          -
        </button>
      </div>
    </FormContainer>
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import FormContainer from "@components/Form/FormContainer.vue";
import Input from "@components/Form/Input.vue";
import { reactive } from "vue";
const data = reactive({
  name: "",
  count: [] as any[],
});

const removeInput = (i: number) => {
  console.log(i);
  data.count[i] = null;
};
const handleSubmit = () => {};
</script>
