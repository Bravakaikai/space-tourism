<template>
  <button
    type="button"
    class="border-2 border-solid border-themeText rounded text-xl tablet:text-2xl"
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
