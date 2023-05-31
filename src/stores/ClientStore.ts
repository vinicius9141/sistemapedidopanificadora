import { defineStore } from "pinia";

import { iClientDTO } from "@/interface/ClientInterface";
import AddressRepository from "@/repository/AddressRepository";

export const ClientStore = defineStore("Clients", {
  state: () => {
    return {
      Clients: [] as iClientDTO[],
    };
  },
  getters: {
    getAll: (state): iClientDTO[] => state.Clients,
  },
  actions: {
    setAll(data: iClientDTO[]) {
      this.Clients = data;
    },
    async findAll() {
      AddressRepository.findAll();
    },
    updateList(data: iClientDTO) {
      this.Clients.push(data);
    },
  },
});
