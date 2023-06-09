<template>
  <div class="w-full flex">
    <slot />
    <article
      class="w-4/12 border border-slate-400 font-bold p-2 flex justify-around"
    >
      <button class="w-5/12 h-10 bg-yellow-400" @click="handleEdit">
        editar
      </button>
      <button class="w-5/12 h-10 bg-red-400" @click="handleRemove">
        remover
      </button>
    </article>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["editEvent", "removeEvent"]);
const handleEdit = (e: any) => emit("editEvent", e);
const handleRemove = (e: any) => emit("removeEvent", e);
</script>
