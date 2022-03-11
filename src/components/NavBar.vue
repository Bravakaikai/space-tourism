<template>
  <div>
    <ul class="flex w-full cursor-pointer">
      <li
        v-for="item in tabList"
        :id="item.route"
        :key="item.route"
        :value="item.route"
        :class="`tab w-1/4 p-2 laptop:py-4 tablet:text-xl border-2 border-transparent flex justify-center items-center flex-col laptop:flex-row hover:bg-hover ${
          currTab === item.name ? 'active' : ''
        }`"
        :style="{ '--font-color': item.color }"
        @click="$emit('goPage', { name: item.name, route: item.route })"
      >
        <i :class="`fa-solid fa-${item.icon}`"></i>
        <p class="laptop:ml-2 mb-0">{{ item.name }}</p>
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
.tab.active {
  color: var(--font-color);
  border-bottom: 2px solid var(--font-color);
}
</style>
