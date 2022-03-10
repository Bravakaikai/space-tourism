<template>
  <div
    class="app bg-themeBg bg-cover bg-repeat h-full min-h-screen"
    :class="mode === 'dark' ? 'theme-dark' : 'theme-light'"
  >
    <main-layout>
      <template v-slot:logo>
        <img
          class="logo absolute rounded-full"
          :src="require('@/assets/image/logo.jpg')"
          alt="logo"
        />
      </template>
      <template v-slot:toolBar>
        <tool-bar />
      </template>
    </main-layout>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import MainLayout from "@/views/MainLayout.vue";
import ToolBar from "@/components/ToolBar.vue";
export default {
  name: "App",
  components: {
    "main-layout": MainLayout,
    "tool-bar": ToolBar,
  },
  computed: {
    ...mapState({
      mode: (state) => state.darkMode,
    }),
  },
  created() {
    this.setDarkMode(localStorage.darkMode || "light");
  },
  methods: {
    ...mapMutations(["setDarkMode"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Teko&display=swap");
@import "@/assets/css/main.scss";
.app {
  padding-top: 100px;
  background-image: url("@/assets/image/bg.png");
  .logo {
    width: 150px;
    top: -100px;
    left: 50%;
    transform: translate(-50%, 25px);
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  }
}
</style>
