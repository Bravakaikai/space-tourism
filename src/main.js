import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import "@/assets/css/tailwind.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

loadFonts();

createApp(App).use(router).use(store).use(Antd).mount("#app");
