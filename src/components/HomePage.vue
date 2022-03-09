<template>
  <v-container class="home" no-gutters>
    <transition mode="out-in">
      <img
        class="mx-auto animate__animated animate__slideInUp animate__delay-100ms"
        style="width: 250px"
        :src="require('@/assets/image/rockets.png')"
        @click="launchRocket = !launchRocket"
      />
    </transition>
    <p class="mt-5 text-center text-4xl">Are You Ready To Be An Astronaut?</p>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
