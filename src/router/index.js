import {Vue } from 'vue';
import VueRouter from 'vue-router';

import auth from '@/store/module/auth'; // A store Vuex para gerenciar o estado da autenticação

Vue.use(VueRouter);

const routes = [
  {
    path: '/produtos',
    name: 'Produtos',
    component: () => import('@/views/base/IndexProduto.vue'),
    meta: { requiresAuth: true } // Definir que esta rota requer autenticação
  },
  // outras rotas...
];

const router = new VueRouter({
  mode: 'history',
  routes
});

// Guard para verificar a permissão antes de entrar na rota
router.beforeEach((to, from, next) => {
  const token = auth.state.auth.token; // Obter o token de autenticação do Vuex
  
  // Verificar se a rota requer autenticação
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      // Se o token não existir, redirecionar para a página de login
      next({ name: 'Login' });
    } 
  } else {
    // Se não requer autenticação, pode prosseguir
    next();
  }
});

export default router;
