<template>
  <div :class="`${inputSize} mx-2 my-2`">
    <label for="" class="text-white text-lg pl-3 pb-2 font-light">{{label}}</label>
    <select class="w-full rounded-xl outline-none py-1 px-2" >
      <option :value="item.id" v-for="item in data">{{item.name}}</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
  const {label, inputSize, data} = defineProps<{label: string, inputSize: string; data: any[]}>()
</script>