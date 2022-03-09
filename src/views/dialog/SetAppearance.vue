<template>
  <div class="flex justify-center">
    <div class="mr-5">
      <input
        type="radio"
        v-model="darkMode"
        id="light"
        name="darkMode"
        value="light"
        checked
      />
      <label for="light">Light</label>
    </div>
    <div class="ml-5">
      <input
        type="radio"
        v-model="darkMode"
        id="dark"
        name="darkMode"
        value="dark"
      />
      <label for="dark">Dark</label>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "SetAppearance",
  props: {
    tabList: {
      type: Array,
      default: null,
    },
  },
  computed: {
    ...mapState({
      mode: (state) => state.darkMode,
    }),
    darkMode: {
      get() {
        return this.mode;
      },
      set(val) {
        this.setDarkMode(val);
      },
    },
  },
  methods: {
    ...mapMutations(["setDarkMode"]),
  },
};
</script>

<style lang="scss" scoped>
input[type="radio"] {
  transform: scale(1.5);
  cursor: pointer;
}
input[type="radio"] + label {
  margin-left: 10px;
  font-size: 24px;
  cursor: pointer;
}
</style>
