<template>
  <div class="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
    <div
      class="planet hover:bg-hover p-4 tablet:p-5 laptop:p-6 text-center cursor-pointer"
      v-for="item in planetList"
      :key="item.id"
      @click="$router.push({ name: 'planets', params: { id: item.id } })"
    >
      <img
        class="mb-3 shadow-none scale-1 rounded-full transition delay-30 ease-in-out"
        :src="require(`@/assets/image/planet/${item.img}`)"
        :alt="item.name"
      />
      <h3 class="text-themeText text-xl laptop:text-2xl">{{ item.name }}</h3>
      <p class="laptop:text-xl">$ {{ item.price.toLocaleString() }}</p>
    </div>
  </div>
  <pop-up-dialog
    ref="popUpDialog"
    :title="currPlanet?.name"
    @close="closeDetail"
  >
    <template v-slot>
      <planet-detail @close="$refs.popUpDialog.close()" />
    </template>
  </pop-up-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PopUpDialog from "@/components/PopUpDialog.vue";
import PlanetDetail from "@/views/dialog/PlanetDetail.vue";
export default {
  name: "PlanetPage",
  components: {
    "pop-up-dialog": PopUpDialog,
    "planet-detail": PlanetDetail,
  },
  computed: {
    ...mapState({
      currPlanet: (state) => state.currPlanet,
    }),
    routeParam() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
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
  watch: {
    routeParam(val) {
      if (val) this.openDetail(parseInt(val));
    },
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) this.openDetail(parseInt(id));
  },
  methods: {
    ...mapMutations(["setCurrPlanet"]),
    openDetail(id) {
      const planet = this.planetList.find((item) => item.id === id);
      this.$refs.popUpDialog.openDialog();
      this.setCurrPlanet(planet);
    },
    closeDetail() {
      this.$router.push({ name: "planets" });
    },
  },
};
</script>

<style lang="scss" scoped>
.planet:hover img {
  transform: scale(1.08);
}
</style>
