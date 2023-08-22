import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// 引入NProgress进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start()
  next()
})

router.afterEach((to, _, failure) => {
  if (!failure) {
    // failure
  }
  NProgress.done()
})

export default router
