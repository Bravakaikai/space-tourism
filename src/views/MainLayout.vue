<template>
  <div
    class="relative mx-auto w-11/12 bg-themeBg text-themeText border-4 border-double border-themeText rounded-xl"
  >
    <slot name="logo" />
    <h1 class="text-center text-5xl mt-20 mb-6 text-themeText">
      Space Tourism
    </h1>
    <slot name="toolBar" />
    <nav-bar :tab-list="tabList" @go-page="goPage" />
    <div class="view mx-auto py-6 max-w-5xl flex flex-col justify-center">
      <h2
        v-show="currTab !== 'Home'"
        class="text-center mb-9 text-5xl text-themeText"
      >
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
    routePath() {
      return this.$route.path;
    },
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
          color: "#40a9ff",
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
  watch: {
    routePath(val) {
      if (val) {
        const tabName = this.tabList.find(
          (item) => item.route === this.$route.name
        )?.name;
        this.setCurrTab(tabName);
      }
    },
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
.view {
  min-height: calc(100vh - 368px);
}
</style>
