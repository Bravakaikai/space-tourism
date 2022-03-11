<template>
  <div>
    <p class="text-center text-2xl laptop:text-3xl">
      Are You Ready To Be An Astronaut?
    </p>
    <transition mode="out-in">
      <lottie-player
        class="animate__animated animate__slideInUp animate__delay-100ms"
        :animationData="Rocket"
        style="width: 350px; height: 350px"
      />
    </transition>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import Rocket from "@/components/lottie/rocket.json";
export default {
  name: "HomePage",
  components: {
    "lottie-player": Vue3Lottie,
  },
  data() {
    return {
      Rocket,
    };
  },
};
</script>
