<template>
  <teleport to="body">
    <transition mode="out-in">
      <div
        v-if="dialog"
        class="mask fixed top-0 w-full h-screen flex items-center"
        @click.self="dialog = false"
      >
        <div
          class="w-1/3 bg-white mx-auto rounded-md animate__animated animate__zoomIn"
        >
          <header class="relative">
            <h2 class="py-2 text-center text-3xl border-b">
              {{ title }}
            </h2>
            <button
              type="button"
              class="absolute top-0 bottom-0 right-4 text-2xl ml-4"
              @click="dialog = false"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </header>
          <div class="p-4">
            <slot />
          </div>
        </div>
      </div>
    </transition>
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
