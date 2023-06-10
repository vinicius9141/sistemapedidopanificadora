<template>
  <MainContainer>
    <section class="w-9/12 my-0 h-0 py-0 justify-between flex">
      <div class="w-4/12 flex items-center mt-5">
        <h2 class="text-white text-2xl">Motoristas</h2>

        <RouterLink
          class="w-4/12 ml-2 mt-2 h-8 text-white rounded-xl font-bold bg-[#0bb2ff] text-center py-1"
          to="/add-motorista"
        >
          Adicionar
        </RouterLink>
      </div>
      <input
        type="text"
        placeholder="Pesquisar Produto"
        class="w-6/12 h-10 rounded-r-md px-2 outline-0"
      />
    </section>
    <Table
      :data="drivers"
      :keys="['id', 'name']"
      v-on:edit-event="handleEdit"
      v-on:remove-event="handleRemove"
    />
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import { DriverStore } from "@stores/DriverStore";
import { onMounted, ref, watch } from "vue";
import { DriverRemoveService } from "@services/DriverServices";
import Table from "@/components/Tables/Table.vue";
import router from "@/routes";
const drivers = ref<any>({});

const handleEdit = async (e: any) => {
  const store = DriverStore();
  await store.setCurrent(e);
  router.push("/add-motorista?type=edit");
};
const handleRemove = async (e: any) => {
  const store = DriverStore();
  await store.setCurrent(e);
  await DriverRemoveService();
};

watch(
  () => DriverStore().getAll,
  () => {
    drivers.value = DriverStore().getAll;
  }
);

onMounted(async () => {
  const store = DriverStore();
  await store.findAll();
});
</script>
