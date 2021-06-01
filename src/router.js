import { createRouter, createWebHashHistory } from 'vue-router'

import LandingView from './views/LandingView.vue'
import MentionsView from './views/MentionsView.vue'
import ConfidentialiteView from './views/ConfidentialiteView.vue'

const routes = [
  { path: '/', component: LandingView },
  { path: '/mentionslegales', component: MentionsView },
  { path: '/politiqueconfidentialite', component: ConfidentialiteView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'underline font-bold'
})

export default router