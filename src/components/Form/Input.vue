<template>
  <div :class="`flex flex-wrap ${inputSize} mx-2 my-2`">
    <label for="" class="text-white text-lg pl-3 pb-2 font-light">{{
      label
    }}</label>
    <input
      :type="type || 'text'"
      class="w-full py-1 rounded-xl outline-none py-1 px-2"
      @input="handleInputValue"
      :value="value"
      required
    />
  </div>
</template>

<script lang="ts" setup>
const { label, inputSize, type, value } = defineProps<{
  label: string;
  inputSize: string;
  type?: string;
  value: any;
}>();

const emit = defineEmits(["getValue"]);
const handleInputValue = (e: any) => emit("getValue", e.target.value);
</script>
