<template>
  <v-app>
    <LeftNavbar />
    <v-main>
      <TopNavbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import LeftNavbar from './components/left_navigation_drawer/navigation_drawer.vue'
import TopNavbar from './components/top_navbar/top_navbar.vue'
</script>
