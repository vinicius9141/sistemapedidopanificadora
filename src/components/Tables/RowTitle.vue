<template>
  <div class="w-full flex">
    <article class="w-3/12 border border-slate-400 font-bold p-2">
      {{ props.col1 }}
    </article>
    <article
      :class="`${
        !props.col3 ? 'w-5/12' : 'w-3/12'
      } border border-slate-400 font-bold p-2`"
    >
      {{ props.col2 }}
    </article>
    <article
      v-if="props.col3"
      class="w-3/12 border border-slate-400 font-bold p-2"
    >
      {{ props.col3 }}
    </article>
    <article class="w-4/12 border border-slate-400 font-bold p-2"></article>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ col1: string; col2: string; col3?: string }>();
</script>
