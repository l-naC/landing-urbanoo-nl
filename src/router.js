import { createRouter, createWebHashHistory } from 'vue-router'

import LandingView from './views/LandingView.vue'

const routes = [
  { path: '/', component: LandingView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'underline font-bold'
})

export default router