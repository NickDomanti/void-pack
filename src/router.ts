import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    isLargeView: boolean
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/about/:content',
    name: 'About',
    component: () => import('./views/AboutView.vue'),
    meta: {
      isLargeView: true
    }
  },
  {
    path: '/intel',
    name: 'Intel',
    component: () => import('./views/IntelView.vue'),
    meta: {
      isLargeView: true
    }
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
