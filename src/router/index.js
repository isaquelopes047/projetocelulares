import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/registros',
    name: 'registros',
    titulo: 'Registros',
    img: 'Bookmark.png',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrosVue.vue')
  },
  {
    path: '/criarregistro',
    name: 'criarregistro',
    titulo: 'Criar Registro',
    img: 'Upload.png',
    component: () => import(/* webpackChunkName: "about" */ '../views/CriarRegistro.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
