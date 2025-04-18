import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Education from '../views/Education.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/education', component: Education },
    { path: '/contact', component: Contact },
    // Catch-all route to redirect any undefined path to home
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
