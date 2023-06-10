import { defineStore } from "pinia";

import { iDriverDTO } from "@/interface/DriverInterface";
import DriverRepository from "@/repository/DriverRepository";

export const DriverStore = defineStore("drivers", {
  state: () => {
    return {
      drivers: [] as iDriverDTO[],
      current: null as iDriverDTO | null,
    };
  },
  getters: {
    getAll: (state): iDriverDTO[] => state.drivers,
    getCurrent: (state) => state.current,
  },
  actions: {
    async setAll(data: iDriverDTO[]) {
      this.drivers = data;
    },
    async setCurrent(data: iDriverDTO) {
      this.current = data;
    },
    async findAll() {
      DriverRepository.findAll();
    },
    updateDriverList(data: iDriverDTO) {
      this.drivers.push(data);
    },
    async updateDriver(data: iDriverDTO) {
      this.drivers.forEach((driver) => {
        if (driver.id == data.id) driver = { ...driver, ...data };
      });
      this.current = null;
    },
    async removeDriver(data: { id: string }) {
      this.drivers.forEach((driver, i) => {
        if (driver.id == data.id) this.drivers.splice(i, 1);
      });
      this.current = null;
    },
  },
});
