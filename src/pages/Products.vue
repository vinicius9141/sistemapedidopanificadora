<template>
  <MainContainer>
    <section class="w-9/12 my-0 h-0 py-0 justify-between flex">
      <div class="w-4/12 flex items-center mt-5">
        <h2 class="text-white text-2xl">Produtos</h2>

        <RouterLink
          class="w-4/12 ml-2 mt-2 h-8 text-white rounded-xl font-bold bg-[#0bb2ff] text-center py-1"
          to="/add-produto"
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
      :data="products"
      :keys="['id', 'name']"
      v-on:edit-event="handleEdit"
      v-on:remove-event="handleRemove"
    />
  </MainContainer>
</template>
<script lang="ts" setup>
import MainContainer from "@components/MainContainer.vue";
import { ProductStore } from "@stores/ProductStore";
import { onMounted, ref } from "vue";
import { ProductRemoveService } from "@services/ProductService";
import Table from "@/components/Tables/Table.vue";
import router from "@/routes";
const products = ref<any>({});

const handleEdit = async (e: any) => {
  const store = ProductStore();
  await store.setCurrent(e);
  router.push("/add-produto?type=edit");
};
const handleRemove = async (e: any) => {
  const store = ProductStore();
  await store.setCurrent(e);
  await ProductRemoveService();
};

onMounted(async () => {
  const store = ProductStore();
  if (store.all.length <= 0) {
    await store.findAll();
  }
  products.value = store.all;
});
</script>
