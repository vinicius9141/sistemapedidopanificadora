import { defineStore } from "pinia";

import { iVehicleDTO } from "@/interface/VeichlesInterface";
import VehicleRepository from "@/repository/VehicleRepository";

export const VehicleStore = defineStore("vehicles", {
  state: () => {
    return {
      vehicles: [] as iVehicleDTO[],
      current: null as iVehicleDTO | null,
    };
  },
  getters: {
    getAll: (state): iVehicleDTO[] => state.vehicles,
    getCurrent: (state) => state.current,
  },
  actions: {
    setAll(data: iVehicleDTO[]) {
      this.vehicles = data;
    },
    async setCurrent(data: iVehicleDTO) {
      this.current = data;
    },
    async findAll() {
      VehicleRepository.findAll();
    },
    updateList(data: iVehicleDTO) {
      this.vehicles.push(data);
    },
    async updateVehicle(data: iVehicleDTO) {
      this.vehicles.forEach((vehicle) => {
        if (this.current?.id == data.id) vehicle = { ...vehicle, ...data };
      });
      this.current = null;
    },
    async removeVehicle() {
      this.vehicles.forEach((veichle, i) => {
        if (this.current?.id == veichle.id) this.vehicles.splice(i, 1);
      });
      this.current = null;
    },
  },
});
