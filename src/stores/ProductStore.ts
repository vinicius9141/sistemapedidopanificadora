import { defineStore } from "pinia";

import ProductRepository from "@/repository/ProductRepository";

export const ProductStore = defineStore("products", {
  state: () => {
    return {
      product: [] as { name: string; id: string }[],
      current: { name: "", id: "" } as { name: string; id: string },
    };
  },
  getters: {
    all: (state): { name: string; id: string }[] => state.product,
    getCurrent: (state) => state.current,
  },
  actions: {
    setAll(data: { name: string; id: string }[]) {
      this.product = data;
    },
    async setCurrent(data: { name: string; id: string }) {
      this.current = data;
    },
    async findAll() {
      await ProductRepository.findAll();
    },
    updateList(data: { name: string; id: string }) {
      this.product.push(data);
    },
    async updateProduct(data: { name: string; id: string }) {
      this.product.forEach((product) => {
        if (product.id == data.id) product.name = data.name;
      });
      this.current = { name: "", id: "" };
    },
    async removeProduct(data: { id: string }) {
      this.product.forEach((product, i) => {
        if (product.id == data.id) this.product.splice(i, 1);
      });
      this.current = { name: "", id: "" };
    },
  },
});
