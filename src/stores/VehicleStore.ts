import { defineStore } from "pinia";

import { iVehicleDTO } from "@/interface/VeichlesInterface";
import VehicleRepository from "@/repository/DriverRepository";

export const VeichleStore = defineStore("vehicles", {
  state: () => {
    return {
      vehicles: [] as iVehicleDTO[],
    };
  },
  getters: {
    getAll: (state): iVehicleDTO[] => state.vehicles,
  },
  actions: {
    setAll(data: iVehicleDTO[]) {
      this.vehicles = data;
    },
    async findAll() {
      VehicleRepository.findAll();
    },
    updateList(data: iVehicleDTO) {
      this.vehicles.push(data);
    },
  },
});
