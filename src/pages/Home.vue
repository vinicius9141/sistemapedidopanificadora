<template>
  <MainContainer>
    <TicketCard v-for="i in 20" :key="i" />
  </MainContainer>
</template>

<script lang="ts" setup>
  import MainContainer from '@components/MainContainer.vue'
  import TicketCard from '@components/TicketCard.vue'
  document.title = 'Sistema Pedidos Panificadora'
</script>