import { createRouter, createWebHistory } from 'vue-router';
import GoodsView from '../views/GoodsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: GoodsView,
  },
  {
    path: '/categories',
    name: 'categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CategoriesView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
