import { defineStore } from "pinia";

import ProductRepository from "@/repository/ProductRepository";

export const ProductStore = defineStore("products", {
  state: () => {
    return {
      product: [] as { name: string; id: string }[],
    };
  },
  getters: {
    all: (state): { name: string; id: string }[] => state.product,
  },
  actions: {
    setAll(data: { name: string; id: string }[]) {
      this.product = data;
    },
    async findAll() {
      await ProductRepository.findAll();
    },
    updateList(data: { name: string; id: string }) {
      this.product.push(data);
    },
  },
});
