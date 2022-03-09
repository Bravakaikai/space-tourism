<template>
  <v-app
    class="bg bg-themeBackground"
    :class="currMode ? 'theme-dark' : 'theme-light'"
  >
    <img class="logo" :src="require('@/assets/image/logo.jpg')" alt="logo" />
    <home-layout />
    <v-switch
      v-model="currMode"
      label="Dark Mode"
      class="ml-3 text-white"
      color="white"
      hide-details
    />
  </v-app>
</template>

<script>
import HomeLayout from "@/views/HomeLayout.vue";
export default {
  name: "App",
  components: {
    "home-layout": HomeLayout,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  computed: {
    currMode: {
      get() {
        return this.darkMode;
      },
      set(val) {
        this.darkMode = val;
        localStorage.setItem("darkMode", val);
      },
    },
  },
  created() {
    this.darkMode = localStorage.darkMode === "true" || false;
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("@/assets/image/bg.png");
}
.logo {
  position: absolute;
  z-index: 3;
  border-radius: 50%;
  width: 150px;
  left: 50%;
  transform: translate(-50%, 25px);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
}
</style>
