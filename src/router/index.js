import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/produtos',
    name: 'Tables',
    component: () => import('@/views/base/IndexProduto.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
