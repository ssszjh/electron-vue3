// src\router\index.ts
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  //  hash 模式。
  history: createWebHashHistory(),
  routes: [
    // 设置首页
    {
      path: '/',
      component: () => import('../pages/first/index.vue')
    },
    { 
      path: '/second', 
      component: () => import('../pages/second/index.vue') 
    },
  ],
})

export default router

