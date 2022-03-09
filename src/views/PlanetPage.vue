<template>
  <div class="grid grid-cols-3 md:grid-cols-4">
    <div
      class="planet p-5 text-center cursor-pointer"
      v-for="item in planetList"
      :key="item.name"
    >
      <img
        class="mb-3 shadow-none"
        :src="require(`@/assets/image/planet/${item.img}`)"
        :alt="item.name"
      />
      <h3 class="text-xl">{{ item.name }}</h3>
      <p>$ {{ item.price.toLocaleString() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanetPage",
  data() {
    return {
      planetList: [
        {
          name: "Mercury",
          img: "Mercury.webp",
          price: 99999999,
        },
        {
          name: "Venus",
          img: "Venus.webp",
          price: 99999999,
        },
        {
          name: "Earth",
          img: "Earth.webp",
          price: 99999999,
        },
        {
          name: "Mars",
          img: "Mars.webp",
          price: 99999999,
        },
        {
          name: "Jupiter",
          img: "Jupiter.png",
          price: 99999999,
        },
        {
          name: "Saturn",
          img: "Saturn.jpg",
          price: 99999999,
        },
        {
          name: "Uranus",
          img: "Uranus.webp",
          price: 99999999,
        },
        {
          name: "Neptune",
          img: "Neptune.jpg",
          price: 99999999,
        },
        {
          name: "Moon",
          img: "Moon.jpg",
          price: 99999999,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  transition: 0.3s ease-in-out;
}
.planet:hover {
  background-color: rgba(100, 100, 100, 0.2);
  img {
    transform: scale(1);
  }
}
.planet:hover img {
  transform: scale(1.08);
}
</style>
