<template>
  <div>
    <ul class="flex w-full cursor-pointer">
      <li
        v-for="item in tabList"
        :id="item.route"
        :key="item.route"
        :value="item.route"
        :class="`tab w-1/4 flex justify-center items-center p-4 text-xl border-2 border-transparent hover:bg-hoverColor ${
          currTab === item.name ? 'active' : ''
        }`"
        :style="{ '--font-color': item.color }"
        @click="$emit('goPage', { name: item.name, route: item.route })"
      >
        <i :class="`fa-solid fa-${item.icon}`"></i>
        <p class="ml-2">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavBar",
  props: {
    tabList: {
      type: Array,
      default: null,
    },
  },
  computed: {
    ...mapState({
      currTab: (state) => state.currTab,
    }),
  },
};
</script>

<style lang="scss" scoped>
.tab:hover {
  background-color: rgba(100, 100, 100, 0.2);
  color: var(--font-color);
}
.tab.active {
  color: var(--font-color);
  border-bottom: 2px solid var(--font-color);
}
</style>
