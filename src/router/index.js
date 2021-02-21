import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/General/home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/General/about.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/General/login.vue')
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: () => import('@/views/General/registrar.vue')
    
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('@/views/General/perfil.vue')
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import('@/views/General/categorias.vue')
  },
  {
    path: '/categoria/:nombre',
    name: 'categoria',
    component: () => import('@/views/General/categoria-detalle.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
