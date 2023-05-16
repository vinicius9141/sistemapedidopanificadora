<template>
  <div class="flex w-full h-screen bg-dark">
    <Menu />

    <main
      class="flex flex-wrap relative justify-center items-center w-4/6 grow h-screen p-1 overflow-y-auto"
    >
      <Notify type="success" />

      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Menu from "@components/Menu.vue";
import Notify from "@components/Notify.vue";
</script>
