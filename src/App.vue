<template>
  <div
    class="bg-[url('@/assets/image/bg.png')] pt-[85px] pb-[10px] bg-themeBg h-full min-h-screen"
    :class="mode === 'dark' ? 'theme-dark' : 'theme-light'"
  >
    <main-layout class="mb-10">
      <template v-slot:logo>
        <img
          class="shadow-[2px_2px_10px_1px_rgba(0,0,0,0.3)] absolute w-[100px] tablet:w-[125px] laptop:w-[150px] translate-x-[-50%] translate-y-[0px] top-[-50px] tablet:top-[-62.5px] laptop:top-[-75px] left-[50%] rounded-full"
          :src="require('@/assets/image/logo.jpg')"
          alt="logo"
        />
      </template>
    </main-layout>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import MainLayout from "@/views/MainLayout.vue";
export default {
  name: "App",
  components: {
    "main-layout": MainLayout,
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
</style>
