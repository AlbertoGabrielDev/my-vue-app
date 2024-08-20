import { createRouter, createWebHistory } from 'vue-router';
import Store from '../store';
const routes = [
  {
    path: '/produtos',
    name: 'Tables',
    component: () => import('@/views/base/IndexProduto.vue'),
  },
  {
    path: '/login',
    name: 'LoginUsers',
    component: () => import('@/views/login/LoginUsers.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Store.getters.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
