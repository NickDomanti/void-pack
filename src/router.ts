import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('./views/HistoryView.vue')
  },
  {
    path: '/:catchall(.*)',
    name: 'Not Found',
    component: () => import('./views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
