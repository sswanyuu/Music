import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    },
  },
  getters: {},
});
