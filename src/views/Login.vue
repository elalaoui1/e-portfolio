<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }

  const success = await auth.login(email.value, password.value)
  if (!success) {
    error.value = 'Invalid email or password'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <div>
        <h2 class="text-3xl font-bold text-center mb-8">Admin Login</h2>
      </div>
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-[#1A472A] focus:border-[#1A472A] dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            v-model="password"
            required
            class="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-[#1A472A] focus:border-[#1A472A] dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div class="flex items-center justify-between">
          <router-link
            to="/forgot-password"
            class="text-sm text-[#1A472A] hover:text-[#1A472A]/80"
          >
            Forgot your password?
          </router-link>
        </div>
        <div>
          <button
            type="submit"
            class="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#1A472A] hover:bg-[#1A472A]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A472A]"
          >
            Sign in
          </button>
        </div>
        <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>