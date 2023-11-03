import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Electronics from './components/Electronics.vue';
import Clothing from './components/Clothing.vue';
import Grocery from './components/Grocery.vue';
// ... import other category components as needed

const routes = [
  { path: '/', component: Home },
  { path: '/electronics', component: Electronics },
  { path: '/clothing', component: Clothing },
  { path: '/grocery', component: Grocery },
  // ... other category routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;