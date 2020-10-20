import Vue from 'vue'
import VueRouter from 'vue-router'
// import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

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
    component: () => import('@/components/Categorias/Categoria.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
