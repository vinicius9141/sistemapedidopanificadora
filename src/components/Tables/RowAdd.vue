<template>
  <div class="flex bg-white px-2">
    <div
      :data-id="id"
      :class="`${
        qtd ? 'w-5/12' : 'w-10/12'
      } text-center border border-slate-300`"
    >
      {{ name }}
    </div>
    <div class="w-3/12 px-2 border border-slate-300" v-if="qtd">
      <input
        type="number"
        value="0"
        class="w-full px-2 border-2 border-slate-800 rounded-lg"
      />
    </div>
    <div class="w-2/12 border border-slate-300" v-if="qtd">
      <button class="w-full bg-success shadow-md">Add</button>
    </div>
    <div class="w-2/12 border border-slate-300">
      <button class="w-full bg-yellow-300 shadow-md">Rm</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { name, id, qtd } = defineProps<{
  name: string;
  id: string;
  qtd?: boolean;
}>();
</script>
