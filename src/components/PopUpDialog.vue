<template>
  <teleport to="body">
    <transition mode="out-in">
      <div
        v-if="dialog"
        class="bg-mask fixed top-0 w-full h-screen flex items-center"
        @click.self="close"
      >
        <div
          class="w-3/4 tablet:w-1/2 laptop:w-1/4 bg-white mx-auto rounded-md animate__animated animate__zoomIn animate__faster"
        >
          <header class="relative">
            <h2 class="py-2 text-center text-2xl laptop:text-3xl border-b">
              {{ title }}
            </h2>
            <button
              type="button"
              class="absolute top-0 bottom-0 right-4 text-2xl ml-4 hover:bg-transparent"
              @click="close"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </header>
          <div class="content p-4 max-h-[calc(100vh-80px)]">
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
  emits: ["close"],
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
    close(e) {
      if (e && e.currentTarget.className.includes("ant-input")) return;
      this.dialog = false;
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  @apply overflow-auto;
}
@media (max-height: 500px) {
  .content {
    @apply overflow-scroll;
  }
}
</style>
