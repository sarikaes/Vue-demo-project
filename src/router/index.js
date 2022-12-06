import Vue from "vue";
import VueRouter from "vue-router";
import ChooseView from "../views/ChooseView.vue";
import AboutView from "../views/AboutView.vue";
import ServiceView from "../views/ServiceView.vue";
import TeamView from "../views/TeamView.vue";
import ContactView from "../views/ContactView.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/services",
    name: "ServiceView",
    component: ServiceView,
  },
  {
    path: "/team",
    name: "TeamView",
    component: TeamView,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/choose",
    name: "ChooseView",
    component: ChooseView,
  },
  {
    path: "/",
    name: "HomeView",
    meta: { layout: "HomeLayout" },
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
