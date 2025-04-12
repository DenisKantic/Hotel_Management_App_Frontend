import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/create-reservation',
      name: 'CreateReservation',
      component: () => import('@/views/reservation/create_reservation/create_reservation.vue'),
    },
  ],
})

export default router
