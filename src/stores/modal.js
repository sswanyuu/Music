import { defineStore } from "pinia";

export default defineStore("modal", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
  actions: {
    toggleAuthVisibility() {
      this.isOpen ? this.closeAuth() : this.openAuth();
    },
    closeAuth() {
      console.log("closeAuth");
      this.isOpen = false;
    },
    openAuth() {
      this.isOpen = true;
    },
  },
});
