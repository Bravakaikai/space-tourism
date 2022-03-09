<template>
  <div
    class="app bg-themeBackground bg-cover bg-repeat h-full min-h-screen"
    :class="mode === 'dark' ? 'theme-dark' : 'theme-light'"
  >
    <home-layout>
      <template v-slot:logo>
        <img
          class="logo absolute"
          :src="require('@/assets/image/logo.jpg')"
          alt="logo"
        />
      </template>
      <template v-slot:toolBar>
        <tool-bar />
      </template>
    </home-layout>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HomeLayout from "@/views/HomeLayout.vue";
import ToolBar from "@/components/ToolBar.vue";
export default {
  name: "App",
  components: {
    "home-layout": HomeLayout,
    "tool-bar": ToolBar,
  },
  data() {
    return {};
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

<style lang="scss" scoped>
.app {
  padding-top: 100px;
  background-image: url("@/assets/image/bg.png");
}
.logo {
  border-radius: 50%;
  width: 150px;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 25px);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
}
::v-deep(button:hover) {
  background-color: rgba(100, 100, 100, 0.2);
  color: #f87c68;
  border-color: #f87c68;
}
</style>
