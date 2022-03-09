<template>
  <teleport to="body">
    <div
      v-if="dialog"
      class="mask absolute top-0 w-full h-screen flex items-center"
    >
      <div class="relative w-1/4 bg-white mx-auto rounded-md px-4 py-3">
        <header class="mb-3">
          <h2 class="text-center text-3xl">{{ title }}</h2>
          <button
            type="button"
            class="absolute top-4 right-4 text-2xl ml-4"
            @click="dialog = false"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </header>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "PopUpDialog",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    openDialog() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
