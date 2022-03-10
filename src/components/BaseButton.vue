<template>
  <button
    type="button"
    class="border-2 border-solid border-themeText rounded px-4 py-1 text-2xl"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>
