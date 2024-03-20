import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/:catchall(.*)',
    name: 'Not Found',
    component: () => import('./views/NotFoundView.vue'),
    meta: {
      hideNavigation: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
