<template>
  <div
    :class="`hidden max-w-[50%] w-8/12 p-2 text-center font-light bg-[${colors}]-300 top-0 transition-2 left-0 right-0 m-auto`"
  >
    <p>
      {{ message }}
      <button class="text-white font-bold" @click="closed">x</button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { NotifyStore } from "@stores/NotifyStore";

const colors = ref<string>("blue");
const position = ref<string>("-100px");
const message = ref<string>("");

watch(
  () => NotifyStore().getMessage,
  () => {
    const store = NotifyStore();
    if (store.type == "success") colors.value = "green";
    else if (store.type == "warning") colors.value = "yellow";
    else if (store.type == "danger") colors.value = "red";
    else if (store.type == "info") colors.value = "blue";
    position.value = "0";
    message.value = NotifyStore().getMessage;

    setTimeout(() => (position.value = "-100px"), 3000);
  }
);

const closed = () => {
  NotifyStore().setMessage("", "");
  position.value = "-100px";
};
</script>
