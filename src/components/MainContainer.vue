<template>
  <div class="flex w-full h-screen bg-dark">
    <Menu />

    <main class="flex flex-wrap justify-center items-center w-4/6 grow h-screen p-3">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Menu from '@components/Menu.vue'
</script>