import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
//import Electronics from './components/Electronics.vue';
// ... import other category components

const routes = [
  { path: '/', component: Home },
  //{ path: '/electronics', component: Electronics },
  // ... other category routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;