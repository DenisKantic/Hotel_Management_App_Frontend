<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent app @click="rail = false">
    <v-list-item
      height="64"
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="Hotel SoniLux"
      nav
    >
      <template #append>
        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="toggleRail" />
      </template>
    </v-list-item>

    <v-divider />

    <v-list nav dense v-model:opened="openedGroups">
      <v-list-item prepend-icon="mdi-home-city" title="Home" />

      <!-- Reservations -->
      <v-list-group value="reservations" prepend-icon="mdi-calendar-check">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="$t('reservations')" />
        </template>
        <v-list-item :title="$t('create_reservation')" />
        <v-list-item :title="$t('view_reservations')" />
      </v-list-group>

      <!-- Guests -->
      <v-list-group value="guests" prepend-icon="mdi-account-multiple">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="$t('guests')" />
        </template>
        <v-list-item :title="$t('create_guest')" />
        <v-list-item :title="$t('guest_info')" />
      </v-list-group>

      <!-- Rooms -->
      <v-list-group value="rooms" prepend-icon="mdi-bed">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="$t('rooms')" />
        </template>
        <v-list-item title="All Rooms" />
      </v-list-group>

      <!-- Checkin/out -->
      <v-list-group value="checkin" prepend-icon="mdi-login">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Check-in/out" />
        </template>
        <v-list-item title="Check-In" />
        <v-list-item title="Check-Out" />
      </v-list-group>

      <v-list-item prepend-icon="mdi-broom" :title="$t('housekeeping')" />
      <v-list-item prepend-icon="mdi-cash-register" :title="$t('payments')" />

      <!-- Settings -->
      <v-list-group value="settings" prepend-icon="mdi-cog">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="$t('settings')" />
        </template>
        <v-list-item title="User settings" />
        <v-list-item title="Other" />
      </v-list-group>

      <v-list-item prepend-icon="mdi-logout" :title="$t('logout')" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(false)

// Track which groups are opened
const openedGroups = ref<string[]>([])

const toggleRail = () => {
  rail.value = !rail.value
  if (rail.value) {
    openedGroups.value = [] // collapse all
  }
}
</script>

<style scoped>
.v-list-item {
  user-select: none;
}
</style>
