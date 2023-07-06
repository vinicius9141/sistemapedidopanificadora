import { defineStore } from "pinia";

import { iTocketOrderDTO } from "@/interface/TicketOrderInterface";
import TicketOrderRepository from "@/repository/TicketOrderRepository";

export const TicketOrderStore = defineStore("TicketsOrder", {
  state: () => {
    return {
      Tickets: [] as iTocketOrderDTO[],
      current: null as iTocketOrderDTO | null,
    };
  },
  getters: {
    getAll: (state): iTocketOrderDTO[] => state.Tickets,
    getCurrent: (state) => state.current,
  },
  actions: {
    setAll(data: iTocketOrderDTO[]) {
      this.Tickets = data;
    },
    async setCurrent(data: iTocketOrderDTO) {
      this.current = data;
    },
    async findAll() {
      TicketOrderRepository.findAll();
    },
    updateList(data: iTocketOrderDTO) {
      this.Tickets.push(data);
    },
    async updateDriver(data: iTocketOrderDTO) {
      this.Tickets.forEach((ticket) => {
        if (ticket.id == data.id) ticket = { ...ticket, ...data };
      });
      this.current = null;
    },
    async removeDriver(data: { id: string }) {
      this.Tickets.forEach((ticket, i: number) => {
        if (ticket.id == data.id) this.Tickets.splice(i, 1);
      });
      this.current = null;
    },
  },
});
