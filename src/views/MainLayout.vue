<template>
  <div
    class="layout relative mx-auto w-11/12 bg-themeBackground text-themeText border-4 border-double border-themeText rounded-xl"
  >
    <slot name="logo" />
    <h1 class="text-center text-5xl mt-20 mb-6">Space Tourism</h1>
    <slot name="toolBar" />
    <nav-bar :tab-list="tabList" @go-page="goPage" />
    <!-- <ul class="flex w-full cursor-pointer">
      <li
        v-for="item in tabList"
        :id="item.route"
        :key="item.route"
        :value="item.route"
        :class="`tab w-1/4 flex justify-center items-center p-4 text-xl border-2 border-transparent hover:bg-hoverColor ${
          currTab === item.name ? 'active' : ''
        }`"
        :style="{ '--font-color': item.color }"
        @click="goPage(item.name, item.route)"
      >
        <i :class="`fa-solid fa-${item.icon}`"></i>
        <p class="ml-2">{{ item.name }}</p>
      </li>
    </ul> -->
    <div class="view mx-auto py-6 max-w-5xl flex flex-col justify-center">
      <h2 v-show="currTab !== 'Home'" class="text-center mb-9 text-5xl">
        {{ currTab }}
      </h2>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "MainLayout",
  components: {
    "nav-bar": NavBar,
  },
  computed: {
    ...mapState({
      mode: (state) => state.darkMode,
      currTab: (state) => state.currTab,
    }),
  },
  data() {
    return {
      tabList: [
        {
          icon: "house",
          name: "Home",
          route: "home",
          color: "#f87c68",
        },
        {
          icon: "user-astronaut",
          name: "About Us",
          route: "aboutUs",
          color: "#0275ff",
        },
        {
          icon: "earth-asia",
          name: "Planets",
          route: "planets",
          color: "green",
        },
        {
          icon: "comments",
          name: "Contact Us",
          route: "contactUs",
          color: "red",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setCurrTab"]),
    goPage(e) {
      this.setCurrTab(e.name);
      this.$router.push({ name: e.route });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Teko&display=swap");
.layout {
  .view {
    min-height: calc(100vh - 368px);
  }
}
</style>
