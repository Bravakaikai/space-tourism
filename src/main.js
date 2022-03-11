import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import "@/assets/css/tailwind.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

loadFonts();

createApp(App).use(router).use(store).use(Antd).use(Vue3Lottie).mount("#app");
