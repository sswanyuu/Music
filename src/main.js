import { createApp } from "vue";
import { createPinia } from "pinia";
import VeeValidationPlugin from "@/includes/validation";
import App from "./App.vue";
import router from "./router";
import "./includes/firebase";
import "./assets/base.css";
import "./assets/main.css";
const app = createApp(App);
//register plugin
app.use(createPinia());
app.use(router);
app.use(VeeValidationPlugin);
app.mount("#app");
