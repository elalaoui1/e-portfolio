<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const email = ref('')
const message = ref('')
const error = ref('')

const handleResetPassword = async () => {
  error.value = ''
  message.value = ''
  
  if (!email.value) {
    error.value = 'Please enter your email'
    return
  }

  const success = await auth.resetPassword(email.value)
  if (success) {
    message.value = 'Password reset instructions have been sent to your email'
    email.value = ''
  } else {
    error.value = 'Email not found'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <div>
        <h2 class="text-3xl font-bold text-center mb-8">Reset Password</h2>
      </div>
      <form class="space-y-6" @submit.prevent="handleResetPassword">
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
          <button
            type="submit"
            class="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#1A472A] hover:bg-[#1A472A]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A472A]"
          >
            Send Reset Instructions
          </button>
        </div>
        <div class="text-center">
          <router-link
            to="/login"
            class="text-sm text-[#1A472A] hover:text-[#1A472A]/80"
          >
            Back to Login
          </router-link>
        </div>
        <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
        <p v-if="message" class="text-green-500 text-center">{{ message }}</p>
      </form>
    </div>
  </div>
</template>