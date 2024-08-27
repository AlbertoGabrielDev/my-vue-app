import { createRouter, createWebHistory } from 'vue-router';
import LoginUsers from '@/views/login/LoginUsers.vue';
import IndexProduto from '@/views/base/IndexProduto.vue';
import App from '@/App.vue';

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: 'produtos',
        name: 'Produtos',
        component: IndexProduto,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/login',
    children: [
      {
        path: '',
        name: 'LoginUsers',
        component: LoginUsers,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
