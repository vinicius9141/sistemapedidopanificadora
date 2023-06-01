import { defineStore } from "pinia";

import { iTocketOrderDTO } from "@/interface/TicketOrderInterface";
import ClientRepository from "@/repository/ClientRepository";

export const TicketOrderStore = defineStore("TicketsOrder", {
  state: () => {
    return {
      Tickets: [] as iTocketOrderDTO[],
    };
  },
  getters: {
    getAll: (state): iTocketOrderDTO[] => state.Tickets,
  },
  actions: {
    setAll(data: iTocketOrderDTO[]) {
      this.Tickets = data;
    },
    async findAll() {
      ClientRepository.findAll();
    },
    updateList(data: iTocketOrderDTO) {
      this.Tickets.push(data);
    },
  },
});
