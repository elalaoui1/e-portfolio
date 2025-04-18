import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Education from '../views/Education.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import SkillsAdmin from '../views/admin/SkillsAdmin.vue'
import ProjectsAdmin from '../views/admin/ProjectsAdmin.vue'
import EducationAdmin from '../views/admin/EducationAdmin.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/education', component: Education },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
    { 
      path: '/admin', 
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    { 
      path: '/admin/skills', 
      component: SkillsAdmin,
      meta: { requiresAuth: true }
    },
    { 
      path: '/admin/projects', 
      component: ProjectsAdmin,
      meta: { requiresAuth: true }
    },
    { 
      path: '/admin/education', 
      component: EducationAdmin,
      meta: { requiresAuth: true }
    },
  ]
})

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router