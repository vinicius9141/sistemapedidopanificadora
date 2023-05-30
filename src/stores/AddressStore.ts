import { defineStore } from "pinia";

import { iAddressDTO } from "@/interface/AddressInterface";
import DriverRepository from "@/repository/DriverRepository";

export const AddressStore = defineStore("Addresses", {
  state: () => {
    return {
      Addresses: [] as iAddressDTO[],
    };
  },
  getters: {
    getAll: (state): iAddressDTO[] => state.Addresses,
  },
  actions: {
    setAll(data: iAddressDTO[]) {
      this.Addresses = data;
    },
    async findAll() {
      DriverRepository.findAll();
    },
    updateList(data: iAddressDTO) {
      this.Addresses.push(data);
    },
  },
});
