import { defineStore } from "pinia";

import { iClientDTO } from "@/interface/ClientInterface";
import ClientRepository from "@/repository/ClientRepository";

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
      ClientRepository.findAll();
    },
    updateList(data: iClientDTO) {
      this.Clients.push(data);
    },
  },
});
