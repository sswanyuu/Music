import { createApp } from "vue";
import { createPinia } from "pinia";
import VeeValidationPlugin from "@/includes/validation";
import App from "./App.vue";
import router from "./router";
import { auth } from "./includes/firebase";
import "./assets/base.css";
import "./assets/main.css";

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    //create app
    app = createApp(App);
    //register plugin
    app.use(createPinia());
    app.use(router);
    app.use(VeeValidationPlugin);
    app.mount("#app");
  }
});
