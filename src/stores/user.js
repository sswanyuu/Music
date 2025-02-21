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
      await usersCollection.doc(userCredential.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        favor: values.favor,
      });
      await userCredential.user.updateProfile({
        displayName: values.name,
      });
      this.login();
    },
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
  getters: {},
});
