<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-wrap w-7/12 min-h-24 bg-dark-primary p-2 py-5 justify-center items-center"
  >
    <slot />

    <button
      type="submit"
      class="bg-success w-3/6 rounded-lg py-2 mt-5 text-xl font-semibold"
    >
      Cadastrar
    </button>
  </form>
</template>

<script lang="ts" setup>
const emit = defineEmits(["formSubmit"]);

const handleSubmit = (e: any) => {
  emit("formSubmit", e);
};
</script>
