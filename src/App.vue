<template>
  <v-app>
    <LeftNavbar />
    <v-main color="primary" style="min-height: 100vh">
      <TopNavbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import LeftNavbar from './components/left_navigation_drawer/navigation_drawer.vue'
import TopNavbar from './components/top_navbar/top_navbar.vue'
</script>
