<template>
  <div class="w-4/5 mx-auto">
    <img
      v-if="planet?.img"
      :src="require(`@/assets/image/planet/${planet?.img}`)"
      :alt="planet?.name"
    />
    <h3 class="text-xl text-center mt-2">{{ planet?.name }}</h3>
    <p class="text-center mb-2">$ {{ planet?.price.toLocaleString() }}</p>
    <p>{{ planet?.content }}</p>
  </div>
</template>

<script>
export default {
  name: "PlanetDetail",
  data() {
    return {
      planet: null,
    };
  },
  methods: {
    setPlanet(val) {
      this.planet = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
