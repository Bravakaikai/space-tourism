import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import "@/assets/css/tailwind.css";

loadFonts();

createApp(App).use(router).use(store).mount("#app");
