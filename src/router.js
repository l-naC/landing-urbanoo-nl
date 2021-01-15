import { createRouter, createWebHashHistory } from 'vue-router'

import LandingView from './views/LandingView.vue'
import MentionsView from './views/MentionsView.vue'
import CookiesView from './views/CookiesView.vue'
import ConfidentialiteView from './views/ConfidentialiteView.vue'

const routes = [
  { path: '/', component: LandingView },
  { path: '/mentionslegales', component: MentionsView },
  { path: '/politiquecookies', component: CookiesView },
  { path: '/politiqueconfidentialite', component: ConfidentialiteView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'underline font-bold'
})

export default router