import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";

export default defineStore("user", {
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    async register(values) {
      let userCredential = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      await usersCollection.add({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        favor: values.favor,
        userId: userCredential.user.uid,
      });
      this.login();
    },
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    },
  },
  getters: {},
});
