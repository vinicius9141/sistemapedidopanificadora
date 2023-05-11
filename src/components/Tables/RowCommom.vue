<template>
  <div class="flex bg-white px-2">
    <div :class="`${qtd? 'w-5/12' : 'w-10/12'} text-center border border-slate-300`">Nome</div>
    <div class=" w-3/12 px-2  border border-slate-300" v-if="qtd">
      <p class="w-full text-center">Qtd.</p>
    </div>
    <div class="w-2/12 border border-slate-300" v-if="qtd">
    </div>
    <div class="w-2/12 border border-slate-300">
    </div>
  </div>
</template>

<script lang="ts" setup>
const {qtd} = defineProps<{qtd?:boolean}>() 
</script>