<template>
  <v-card
    class="main mx-auto mb-15 w-11/12 bg-themeBackground text-themeText border-4 border-double border-themeText rounded-xl"
  >
    <h1 class="text-center text-5xl mt-20 mb-6">Space Tourism</h1>
    <v-tabs
      v-model="tab"
      class="w-full cursor-pointer"
      :color="getFocusColor"
      grow
    >
      <v-tab
        v-for="item in tabList"
        :key="item.route"
        :value="item.route"
        @click="$router.push({ name: item.route })"
      >
        <i :class="`fa-solid fa-${item.icon}`"></i>
        <p>{{ item.name }}</p>
      </v-tab>
    </v-tabs>
    <v-tabs-items>
      <v-tab-item>
        <router-view class="view py-8 max-w-4xl" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "HomeLayout",
  data() {
    return {
      currTab: null,
      focusColor: "",
      tabList: [
        {
          icon: "house",
          name: "Home",
          route: "home",
        },
        {
          icon: "user-astronaut",
          name: "About Us",
          route: "aboutUs",
        },
        {
          icon: "earth-asia",
          name: "Planets",
          route: "planets",
        },
        {
          icon: "comments",
          name: "Contact Us",
          route: "contactUs",
        },
      ],
    };
  },
  computed: {
    tab: {
      get() {
        return this.currTab;
      },
      set(val) {
        this.currTab = val;
        localStorage.setItem("currTab", val);
      },
    },
    getFocusColor() {
      if (this.tab === "aboutUs") return "blue";
      if (this.tab === "planets") return "green";
      if (this.tab === "contactUs") return "red";
      return "text-themeTex";
    },
  },
  watch: {
    tab(val) {
      switch (val) {
        case "about":
          this.focusColor = "blue";
          break;
        case "planets":
          this.focusColor = "green";
          break;
        case "contact":
          this.focusColor = "red";
          break;
        default:
          this.focusColor = "";
      }
    },
  },
  created() {
    this.currTab = localStorage.currTab || "home";
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Teko&display=swap");
.main {
  margin-top: 100px;
  font-family: "Caveat";
  .v-tab {
    font-size: 20px;
    padding: 24px;
  }
  .view {
    min-height: calc(100vh - 368px);
    max-width: 75%;
  }
}
</style>
