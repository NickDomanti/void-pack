import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/about/:content',
    name: 'About',
    component: () => import('./views/AboutView.vue')
  },
  {
    path: '/intel',
    name: 'Intel',
    component: () => import('./views/IntelView.vue')
  },
  // {
  //   path: '/trading',
  //   name: 'Trading',
  //   component: () => import('./views/TradingView.vue')
  // },
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
