import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: document.cookie.includes('auth_token'),
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const response = await axios.post(
          'http://localhost:8080/auth/login',
          {
            username,
            password,
          },
          {
            withCredentials: true,
          },
        )
        if (response.status === 200) {
          this.isLoggedIn = true
        } else {
          this.isLoggedIn = false
        }
      } catch (error) {
        console.error('Login failed', error)
        this.isLoggedIn = false
      }
    },
  },
})
