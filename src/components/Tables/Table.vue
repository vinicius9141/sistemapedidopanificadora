<template>
  <section
    class="w-9/12 mx-3 mt-[-24vh] py-0 h-[60vh] bg-white rounded-lg overflow-y-auto"
  >
    <RowTitle :col1="format.id" :col2="format.col2" :col3="format.col3" />
    <Row
      :data="item"
      v-for="item in data"
      :key="item[keys[0]]"
      v-on:edit-event="() => handleEdit(item)"
      v-on:remove-event="() => handleRemove(item)"
    >
      <article class="w-3/12 pt-4 border border-slate-400 font-bold p-2">
        {{ item[keys[0]] }}
      </article>
      <article class="w-5/12 pt-4 border border-slate-400 font-bold p-2">
        {{ item[keys[1]] }}
      </article>
      <article
        v-if="keys.length > 2"
        class="w-5/12 pt-4 border border-slate-400 font-bold p-2"
      >
        {{ item[keys[2]] }}
      </article>
    </Row>
  </section>
</template>

<script lang="ts" setup>
import Row from "@/components/Tables/Row.vue";
import RowTitle from "@/components/Tables/RowTitle.vue";
import { reactive, onMounted } from "vue";

const { data, keys } = defineProps<{ data: any; keys: string[] }>();
const format = reactive({
  id: "",
  col2: "" as string,
  col3: "" as string,
});

const emit = defineEmits(["editEvent", "removeEvent"]);

const handleEdit = (e: any) => emit("editEvent", e);
const handleRemove = (e: any) => emit("removeEvent", e);

const firstLetterUpperCase = (word: string): string => {
  return word
    .split("")
    .map((letter, i) => {
      if (i <= 0) {
        return letter.toUpperCase();
      }
      return letter;
    })
    .join("");
};

onMounted(() => {
  format.id = keys[0].toUpperCase();
  format.col2 = firstLetterUpperCase(keys[1]);
  if (keys.length > 2) format.col3 = firstLetterUpperCase(keys[2]);
});
</script>
