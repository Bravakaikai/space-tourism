import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomePage.vue"),
  },
  {
    path: "/about",
    name: "aboutUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
  },
  {
    path: "/planets/:id?",
    name: "planets",
    alias: "/login",
    component: () =>
      import(/* webpackChunkName: "planets" */ "../views/PlanetPage.vue"),
  },
  {
    path: "/contact",
    name: "contactUs",
    component: () =>
      import(/* webpackChunkName: "contactUs" */ "../views/ContactPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
