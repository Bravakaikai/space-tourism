<template>
  <div>
    <transition mode="out-in">
      <img
        class="mx-auto animate__animated animate__slideInUp animate__delay-100ms"
        style="width: 250px"
        :src="require('@/assets/image/rockets.png')"
        @click="launchRocket = !launchRocket"
      />
    </transition>
    <p class="mt-5 text-center text-4xl">Are You Ready To Be An Astronaut?</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
