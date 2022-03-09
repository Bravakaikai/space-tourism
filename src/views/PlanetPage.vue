<template>
  <div class="grid grid-cols-3 md:grid-cols-4">
    <div
      class="planet p-6 text-center cursor-pointer"
      v-for="item in planetList"
      :key="item.id"
      @click="$router.push({ path: '/planets/' + item.id })"
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
  <pop-up-dialog ref="popUpDialog" :title="currPlanet?.name">
    <template v-slot>
      <planet-detail ref="detail" />
    </template>
  </pop-up-dialog>
</template>

<script>
import PopUpDialog from "@/components/PopUpDialog.vue";
import PlanetDetail from "@/views/dialog/PlanetDetail.vue";
export default {
  name: "PlanetPage",
  components: {
    "pop-up-dialog": PopUpDialog,
    "planet-detail": PlanetDetail,
  },
  data() {
    return {
      currPlanet: null,
      planetList: [
        {
          id: 1,
          name: "Mercury",
          img: "Mercury.webp",
          price: 99999999,
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt modi magni distinctio ratione natus itaque, molestiae, harum unde quaerat eius cumque mollitia ad error voluptatibus iure ex. Quo, explicabo animi.",
        },
        {
          id: 2,
          name: "Venus",
          img: "Venus.webp",
          price: 99999999,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit officia vel a saepe nihil enim, quasi deleniti praesentium aperiam! Est itaque neque perspiciatis nam veritatis, assumenda cumque consequatur distinctio molestiae.",
        },
        {
          id: 3,
          name: "Earth",
          img: "Earth.webp",
          price: 99999999,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi quasi nisi eveniet beatae magni voluptas fuga, repellat voluptate, consequuntur, ipsa voluptatum accusamus id harum? Non nemo placeat aliquam ullam.",
        },
        {
          id: 4,
          name: "Mars",
          img: "Mars.webp",
          price: 99999999,
          content:
            "Deserunt minus tenetur ad obcaecati voluptate praesentium quisquam. Nihil officia quis ratione illum obcaecati aperiam unde numquam tempora nobis, porro eos voluptatibus placeat natus possimus enim sed adipisci cum accusantium.",
        },
        {
          id: 5,
          name: "Jupiter",
          img: "Jupiter.png",
          price: 99999999,
          content:
            "Esse vitae, excepturi sapiente doloribus architecto quisquam modi ex cum error officiis veniam iure magni perspiciatis consequuntur enim in officia. Delectus accusantium quod praesentium provident aut fuga, perspiciatis nostrum repudiandae.",
        },
        {
          id: 6,
          name: "Saturn",
          img: "Saturn.jpg",
          price: 99999999,
          content:
            "Officiis facilis qui quasi ullam, mollitia molestias neque accusamus doloribus quis quas culpa, eos aliquam dolore, alias excepturi cumque inventore? Nostrum quo illum at blanditiis quisquam fuga impedit dolorem temporibus.",
        },
        {
          id: 7,
          name: "Uranus",
          img: "Uranus.webp",
          price: 99999999,
          content:
            "Facilis sapiente corporis nam architecto quia laboriosam omnis aut officiis asperiores enim porro, vel quidem ipsum odit libero, maxime iste soluta blanditiis dicta sed qui alias earum tempore. Eius, itaque.",
        },
        {
          id: 8,
          name: "Neptune",
          img: "Neptune.jpg",
          price: 99999999,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit officia vel a saepe nihil enim, quasi deleniti praesentium aperiam! Est itaque neque perspiciatis nam veritatis, assumenda cumque consequatur distinctio molestiae.",
        },
        {
          id: 9,
          name: "Moon",
          img: "Moon.jpg",
          price: 99999999,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit officia vel a saepe nihil enim, quasi deleniti praesentium aperiam! Est itaque neque perspiciatis nam veritatis, assumenda cumque consequatur distinctio molestiae.",
        },
      ],
    };
  },
  updated() {
    const id = this.$route.params.id;
    if (id) this.openDetail(parseInt(id));
  },
  methods: {
    openDetail(id) {
      const planet = this.planetList.find((item) => item.id === id);
      this.currPlanet = planet;
      this.$nextTick(() => {
        this.$refs.popUpDialog.openDialog();
        this.$refs.detail.setPlanet(planet);
      });
    },
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
