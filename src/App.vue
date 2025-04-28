<template>
  <v-app>
    <LeftNavbar v-if="isLoggedIn" />
    <v-main>
      <TopNavbar v-if="isLoggedIn" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useAuthStore } from './stores/auth'
import LeftNavbar from './components/left_navigation_drawer/navigation_drawer.vue'
import TopNavbar from './components/top_navbar/top_navbar.vue'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()

const { isLoggedIn } = storeToRefs(authStore)
</script>
