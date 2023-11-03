import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./components/LoginView.vue";
import HomeView from "./components/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home/:byWayOf",
    name: "home",
    props: true,
    component: HomeView,
  },
   { path: '/', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;