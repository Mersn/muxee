import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/index.vue'
import About from './pages/about.vue'
import Services from './pages/services.vue'
import Portfolio from './pages/portfolio.vue'
import Contact from './pages/contact.vue'
import Error from './pages/404.vue'

const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact },
  { path: '/404', component: Error },
  { path: '/:pathMatch(.*)', redirect: '/404' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes,
})

export default router
