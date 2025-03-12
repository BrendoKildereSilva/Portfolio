import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/work.vue'
import Workdetails from '../views/Workdetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Work',
      name: 'projects',
      component: Work,
      children: [
        {
          path: ":id",
          name: "jobdetails",
          component: Workdetails
        }
      ]
    },
  ]
})

export default router
