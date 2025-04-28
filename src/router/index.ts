import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/login_screen.vue'),
    },
    {
      path: '/create-reservation',
      name: 'CreateReservation',
      component: () => import('@/views/reservation/create_reservation/create_reservation.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const { isLoggedIn } = storeToRefs(authStore)

  if (to.meta.requiresAuth && !isLoggedIn.value) {
    console.log('Middleware not logged in')
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
