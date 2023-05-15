import { defineStore } from "pinia";

import { iDriverDTO } from "@/interface/DriverInterfaces";

export const DriverStore = defineStore("products", {
  state: () => {
    return {
      drivers: [] as iDriverDTO[],
    };
  },
  getters: {
    getAll: (state): iDriverDTO[] => state.drivers,
  },
  actions: {
    setAll(data: iDriverDTO[]) {
      this.drivers = data;
    },
    updateList(data: iDriverDTO) {
      this.drivers.push(data);
    },
  },
});
