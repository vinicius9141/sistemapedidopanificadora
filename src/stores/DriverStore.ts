import { defineStore } from "pinia";

import { iDriverDTO } from "@/interface/DriverInterfaces";
import DriverRepository from "@/repository/DriverRepository";

export const DriverStore = defineStore("drivers", {
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
    async findAll() {
      DriverRepository.findAll();
    },
    updateList(data: iDriverDTO) {
      this.drivers.push(data);
    },
  },
});
