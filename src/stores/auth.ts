import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const isAuthenticated = ref(false)
  const user = ref(null)

  // Simulated user data - replace with your actual user data structure
  const users = [
    {
      email: 'admin@example.com',
      password: 'admin123' // In a real app, this would be hashed
    }
  ]

  const login = async (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password)
    if (user) {
      isAuthenticated.value = true
      router.push('/admin')
      return true
    }
    return false
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = null
    router.push('/login')
  }

  const resetPassword = async (email: string) => {
    const user = users.find(u => u.email === email)
    if (user) {
      // In a real app, this would send a password reset email
      console.log('Password reset email sent to:', email)
      return true
    }
    return false
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
    resetPassword
  }
})