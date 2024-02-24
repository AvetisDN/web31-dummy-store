import "./assets/main.css";
import router from "./routes";
import { createMetaManager } from "vue-meta";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(createMetaManager());
app.mount("#app");
