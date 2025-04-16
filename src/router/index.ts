import { createRouter, createWebHistory } from 'vue-router'

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
    },
  ],
})

export default router
