import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/usuario',
    name: 'Tables',
    component: () => import('@/views/base/IndexUsuario.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
