import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: () => import('@/components/layout'),
    children: [
      {
        path: '/user',
        component: () => import('@/views/user')
      },
      {
        path: '/setting',
        component: () => import('@/views/setting')
      }
    ]
  },
  {
    path: '/',
    redirect: '/index'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
