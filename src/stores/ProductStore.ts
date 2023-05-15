import { defineStore } from "pinia";

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
    updateList(data: { name: string; id: string }) {
      this.product.push(data);
    },
  },
});
