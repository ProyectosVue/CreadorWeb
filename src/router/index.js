import Vue from 'vue'
import VueRouter from 'vue-router'
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/General/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/General/About.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import('@/views/General/Categorias.vue')
  },
  {
    path: '/categoria/:nombre',
    name: 'categoria',
    component: () => import('@/components/Categorias/Categoria.vue')
  },
  // {
  //   path: '/categoria',
  //   name: 'categoria',
  //   component: () => import('@/components/Categorias/Categoria.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
