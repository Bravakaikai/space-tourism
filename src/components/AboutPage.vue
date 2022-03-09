<template>
  <v-container no-gutters>
    <div class="about d-flex" v-for="(item, index) in contentList" :key="index">
      <img class="mx-auto w-1/2" :src="item.imgUrl" :alt="item.title" />
      <div class="d-flex flex-col justify-center px-8">
        <h3 class="text-center text-3xl mb-3">{{ item.title }}</h3>
        <p class="text-base">{{ item.content }}</p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AboutPage",
  data: () => ({
    contentList: [
      {
        imgUrl:
          "https://cdn.pixabay.com/photo/2021/04/15/04/19/astronaut-6180010_960_720.jpg",
        title: "Intelligent",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora maiores dicta, distinctio consectetur, fuga officiis dolorem sit tenetur eius ullam assumenda adipisci doloremque necessitatibus, odit est optio dolores repellendus!",
      },
      {
        imgUrl:
          "https://cdn.pixabay.com/photo/2020/03/26/02/01/astronaut-4968983_1280.jpg",
        title: "Reliable",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat error optio, doloribus reiciendis molestias id impedit. Facilis, veritatis similique eligendi officiis consectetur, eos, voluptatum omnis provident error excepturi harum blanditiis.",
      },
      {
        imgUrl:
          "https://cdn.pixabay.com/photo/2020/01/13/01/40/astronaut-4761434_1280.jpg",
        title: "Hope",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, harum! Accusamus perferendis, perspiciatis ducimus nulla impedit facilis minus qui, aspernatur maxime explicabo iure et corrupti ab quae architecto cupiditate ut.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.about:nth-child(2n) img {
  order: 1;
}
</style>
