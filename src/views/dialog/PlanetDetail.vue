<template>
  <div class="w-4/5 mx-auto">
    <img
      v-if="planet?.img"
      :src="require(`@/assets/image/planet/${planet?.img}`)"
      :alt="planet?.name"
    />
    <p class="text-center text-xl my-2">
      $ {{ planet?.price.toLocaleString() }}
    </p>
    <p>{{ planet?.content }}</p>
    <base-button
      :title="'Buy Now'"
      class="block mx-auto mt-2 px-4 py-1"
      @click="checkValid"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "PlanetDetail",
  components: {
    "base-button": BaseButton,
  },
  computed: {
    ...mapState({
      planet: (state) => state.currPlanet,
      userName: (state) => state.userName,
    }),
  },
  methods: {
    checkValid() {
      if (!this.userName) {
        alert("Please login and try again!");
        this.$emit("close");
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>
