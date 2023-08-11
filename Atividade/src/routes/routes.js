import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About/About.vue'
import Home from '../views/Home/Home.vue'
import NewTalent from '../views/Talent/New/NewTalent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sobre',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/talentos/novo',
      name: 'NewTalent',
      component: NewTalent
    }
  ]
})

export default router
