<template>
  <div :class="`${inputSize} mx-2 my-2`">
    <label for="" class="text-white text-lg pl-3 pb-2 font-light">{{label}}</label>
    <input type="text" class="w-full py-1 rounded-xl outline-none py-1 px-2" required />
  </div>
</template>

<script lang="ts" setup>
  const {label, inputSize} = defineProps<{label: string, inputSize: string}>()
</script>