<template>
  <div class="w-[30%] m-[1%] p-4 bg-[#E9E5E5] rounded-md">
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

const { order } = defineProps<{ order: iTocketOrderDTO }>();
</script>
