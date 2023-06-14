import { defineStore } from "pinia";

import { iClientDTO } from "@/interface/ClientInterface";
import ClientRepository from "@/repository/ClientRepository";

export const ClientStore = defineStore("Clients", {
  state: () => {
    return {
      Clients: [] as iClientDTO[],
      current: null as iClientDTO | null,
    };
  },
  getters: {
    getAll: (state): iClientDTO[] => state.Clients,
    getCurrent: (state) => state.current,
  },
  actions: {
    setAll(data: iClientDTO[]) {
      this.Clients = data;
    },
    async setCurrent(data: iClientDTO) {
      this.current = data;
    },
    async findAll() {
      ClientRepository.findAll();
    },
    updateList(data: iClientDTO) {
      this.Clients.push(data);
    },
    async updateClient(data: iClientDTO) {
      this.Clients.forEach((client) => {
        if (client.id == data.id) client = { ...client, ...data };
      });
      this.current = null;
    },
    async removeClient(data: { id: string }) {
      this.Clients.forEach((client, i) => {
        if (client.id == data.id) this.Clients.splice(i, 1);
      });
      this.current = null;
    },
  },
});
