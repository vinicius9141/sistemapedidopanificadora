<template>
  <div
    ref="notfyElement"
    class="absolute max-w-[50%] bg-blue-500 w-8/12 h-12 p-2 text-center font-light top-0 left-0 right-0 m-auto"
  >
    <div
      class="w-full h-[100%] justify-between text-white font-semibold flex items-center"
    >
      {{ message }}
      <button class="text-white font-bold" @click="closed">x</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import { NotifyStore } from "@stores/NotifyStore";

const colors = ref<string>("bg-blue-500");
const position = ref<string>("-100px");
const message = ref<string>("");
const notfyElement = ref<HTMLElement>();

watch(
  () => NotifyStore().getMessage,
  () => {
    const store = NotifyStore();
    console.log(store.getMessage);
    if (store.getMessage.length > 0) {
      notfyElement.value?.classList.remove(colors.value);

      if (store.type == "success") colors.value = "bg-green-500";
      else if (store.type == "warning") colors.value = "bg-yellow-500";
      else if (store.type == "danger") colors.value = "bg-red-500";
      else if (store.type == "info") colors.value = "bg-blue-500";
      position.value = "0";
      message.value = NotifyStore().getMessage;

      notfyElement.value?.classList.add(colors.value);
      animNotify(true);

      setTimeout(() => {
        animNotify(false);
      }, 3000);
      return;
    }
  }
);

const animNotify = (active: boolean) => {
  if (active) notfyElement.value!.style.transform = "translateY(0px)";
  else notfyElement.value!.style.transform = "translateY(-100px)";
};

onMounted(() => {
  notfyElement.value!.style.transition = ".5s";
  animNotify(false);
});

const closed = () => {
  NotifyStore().setMessage("", "");
  animNotify(false);
};
</script>
