<template>
  <MainContainer>
    <TicketCard v-for="(order, i) in tickets" :key="i" :order="order" />
    <div class="text-white font-semibold" v-if="tickets.length <= 0">
      Nenhuma Ordem de Serviço
    </div>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import TicketCard from "@components/TicketCard.vue";
import { onMounted, ref, watch } from "vue";
import { TicketOrderStore } from "@/stores/TicketOrderStore";
import { iTocketOrderDTO } from "@/interface/TicketOrderInterface";
document.title = "Sistema Pedidos Panificadora";

const tickets = ref<iTocketOrderDTO[]>([]);

watch(
  () => TicketOrderStore().getAll,
  () => {
    tickets.value = TicketOrderStore().getAll;
    console.log(tickets);
  }
);

onMounted(async () => {
  await TicketOrderStore().findAll();
});
</script>
