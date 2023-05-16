import { defineStore } from "pinia";

export const NotifyStore = defineStore("notify", {
  state: () => {
    return {
      message: "",
      position: 0,
      type: "sucess",
    };
  },
  getters: {
    getMessage: (state) => state.message,
    getPosition: (state) => state.message,
  },
  actions: {
    setMessage(message: string, type: string) {
      this.message = message;
      this.type = type;
    },
    active(pos: number) {
      this.position = pos;
    },
  },
});
