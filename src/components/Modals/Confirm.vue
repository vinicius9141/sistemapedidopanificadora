<template>
  <section
    class="bg-[rgba(255,255,255,0.4)] w-full h-[100%] absolute hidden justify-center items-center"
    ref="display"
  >
    <article class="bg-white w-3/6 h-32 p-2 relative">
      <p
        @click="() => action(false)"
        class="absolute right-2 top-0 cursor-pointer font-bold text-2xl text-red-500"
      >
        x
      </p>
      <h3 class="w-full h-[50%] text-center font-bold text-2xl text-slate-600">
        Deseja concluir edição?
      </h3>
      <div class="w-full h-[50%] flex justify-end items-end">
        <button
          @click="handleConfirm"
          class="bg-success px-5 h-10 ml-1 text-xl font-semibold"
        >
          Sim
        </button>
        <button
          @click="handleExclude"
          class="bg-red-500 px-5 h-10 ml-1 text-xl font-semibold"
        >
          Não
        </button>
      </div>
    </article>
  </section>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
const emit = defineEmits(["confirmEvent", "excludeEvent", "actionModal"]);

const display = ref<HTMLElement>();

const action = (active: boolean) => {
  if (active) {
    display.value?.classList.remove("hidden");
    display.value?.classList.add("flex");
  } else {
    display.value?.classList.remove("flex");
    display.value?.classList.add("hidden");
  }
};

const handleConfirm = (e: any) => emit("confirmEvent", { e });
const handleExclude = (e: any) => emit("excludeEvent", { e });

onMounted(() => emit("actionModal", action));
</script>
