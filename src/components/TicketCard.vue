<template>
  <div
    class="w-[30%] m-[1%] p-4 bg-[#E9E5E5] rounded-md relative"
    @click="handleHoverOption"
  >
    <div class="absolute right-2 top-0 w-2/6">
      <p class="font-bold text-xl cursor-pointer text-right" data-id="option">
        ...
      </p>
      <div
        class="absolute right-0 hidden w-full flex-wrap bg-white"
        ref="optionModalEl"
      >
        <router-link
          class="w-full text-right p-2 hover:text-slate-400"
          to="#"
          data-id="option"
          >editar</router-link
        >
        <router-link
          class="w-full text-right p-2 hover:text-slate-400"
          to="#"
          data-id="option"
          >remover</router-link
        >
      </div>
    </div>
    <p class="text-center my-2">Client: {{ order.client.name }}</p>
    <p class="text-center my-2">Pedidos:</p>
    <p class="text-center my-2" v-for="product in order.products">
      {{ product.qtd }} {{ product.name }}
    </p>
    <p class="text-center my-2">Motorista: {{ order.driver.name }}</p>
    <p class="text-center my-2">Rota: {{ order.address.name }}</p>
    <p class="text-center w-full flex my-2 justify-around">
      Dia {{ order.date }} <span> às {{ order.hour }}hs</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { iTocketOrderDTO } from "@/interface/TicketOrderInterface";
import { onMounted, ref } from "vue";

const optionModalEl = ref<HTMLDivElement>();

const handleHoverOption = (e: any) => {
  if (e.target.dataset["id"] && e.target.dataset["id"] == "option") {
    e.target.dataset["id"] = "close";
    optionModalEl.value?.classList.remove("hidden");
    optionModalEl.value?.classList.add("flex");
    return;
  } else {
    e.target.dataset["id"] = "option";
    optionModalEl.value?.classList.add("hidden");
    optionModalEl.value?.classList.remove("flex");
    return;
  }
};

const { order } = defineProps<{ order: iTocketOrderDTO }>();
onMounted(() => {
  console.log(order);
});
</script>
