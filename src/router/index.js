import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: import(
      /* webpackChunkName: "home" */ "../components/HomePage.vue"
    ),
  },
  {
    path: "/about",
    name: "aboutUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AboutPage.vue"),
  },
  {
    path: "/planets",
    name: "planets",
    component: () =>
      import(/* webpackChunkName: "planets" */ "../components/PlanetPage.vue"),
  },
  // {
  //   path: "/planets/:id",
  //   name: "planets",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "planetsDetail" */ "../components/PlanetPage.vue"
  //     ),
  // },
  {
    path: "/contact",
    name: "contactUs",
    component: () =>
      import(
        /* webpackChunkName: "contactUs" */ "../components/ContactPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
