import { defineStore } from "pinia";

import { iAddressDTO } from "@/interface/AddressInterface";
import AddressRepository from "@/repository/AddressRepository";

export const AddressStore = defineStore("Addresses", {
  state: () => {
    return {
      Addresses: [] as iAddressDTO[],
      current: null as iAddressDTO | null,
    };
  },
  getters: {
    getAll: (state): iAddressDTO[] => state.Addresses,
    getCurrent: (state) => state.current,
  },
  actions: {
    setAll(data: iAddressDTO[]) {
      this.Addresses = data;
    },
    async setCurrent(data: iAddressDTO) {
      this.current = data;
    },
    async findAll() {
      AddressRepository.findAll();
    },
    updateList(data: iAddressDTO) {
      this.Addresses.push(data);
    },
    async updateAddress(data: iAddressDTO) {
      this.Addresses.forEach((address) => {
        if (address.id == data.id) address = { ...address, ...data };
      });
      this.current = null;
    },
    async removeAddress(data: { id: string }) {
      this.Addresses.forEach((address, i) => {
        if (address.id == data.id) this.Addresses.splice(i, 1);
      });
      this.current = null;
    },
  },
});
