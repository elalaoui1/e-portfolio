<script setup lang="ts">
import { HomeIcon, AcademicCapIcon, WrenchScrewdriverIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
// import { useAuthStore } from '../stores/auth'
// const auth = useAuthStore()

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Skills', path: '/skills', icon: WrenchScrewdriverIcon },
  { name: 'Projects', path: '/projects', icon: DocumentTextIcon },
  { name: 'Education', path: '/education', icon: AcademicCapIcon },
  { name: 'Contact', path: '/contact', icon: EnvelopeIcon },
]

</script>

<template>
  <!-- Desktop Navigation -->
  <div class="nav-container">
    <nav class="nav-content">
      <div class="flex items-center justify-between h-16 px-6">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
          <img src="/icons/icon.png" alt="Logo" class="h-8 w-8 inline-block ml-2" />
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center justify-center flex-1 space-x-8">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path"
            class="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium">
            {{ item.name }}
          </router-link>
        </div>

        <!-- Right Side Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <a 
            href="/Elalaoui_resum.pdf" 
            download="ELALAOUI_ABDELKARIM_CV.pdf"
            class="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            Download CV
          </a>
          <!-- <template v-if="auth.isAuthenticated">
            <router-link to="/admin" 
              class="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              Admin
            </router-link>
            <button @click="auth.logout" 
              class="text-gray-300 hover:text-red-500 transition-colors duration-200">
              Logout
            </button>
          </template> -->
        
        </div>

        <div class="md:hidden items-center space-x-4">
          <a 
            href="/Elalaoui_resum.pdf" 
            download="ELALAOUI_ABDELKARIM_CV.pdf"
            class="px-6 py-2 rounded-lg text-white border border-purple-500 transition-all duration-300 transform hover:scale-105">
            Download CV
          </a>
          <!-- <template v-if="auth.isAuthenticated">
            <router-link to="/admin" 
              class="text-gray-300 hover:text-purple-400 transition-colors duration-200">
              Admin
            </router-link>
            <button @click="auth.logout" 
              class="text-gray-300 hover:text-red-500 transition-colors duration-200">
              Logout
            </button>
          </template> -->
        
        </div>

      </div>
    </nav>
  </div>

  <!-- Mobile Navigation -->
  <nav class="md:hidden fixed bottom-4 left-4 right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] shadow-lg z-50">
    <div class="flex justify-around py-2 px-2">
      <router-link v-for="item in navItems" :key="item.path" :to="item.path"
        class="flex flex-col items-center py-2 px-3 text-gray-400 hover:text-purple-400 relative group">
        <component :is="item.icon" class="h-6 w-6 transition-colors duration-200" />
        <span class="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-6 bg-gradient-to-r from-violet-600 to-purple-600 px-2 py-1 rounded-full text-white text-[10px]">
          {{ item.name }}
        </span>
      </router-link>
    </div>
  </nav>
</template>