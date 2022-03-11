<template>
  <h2 class="text-center mb-9 text-4xl laptop:text-5xl text-themeText">
    Not Found
  </h2>
  <lottie-player :animationData="NotFound" class="lottie" />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import NotFound from "@/components/lottie/notFound.json";
export default {
  name: "NotFound",
  components: {
    "lottie-player": Vue3Lottie,
  },
  data() {
    return {
      NotFound,
    };
  },
};
</script>

<style lang="scss" scoped>
.lottie {
  width: 335px;
  height: 335px;
}
@media screen and (max-width: 640px) {
  .lottie {
    width: 300px;
    height: 300px;
  }
}
</style>
