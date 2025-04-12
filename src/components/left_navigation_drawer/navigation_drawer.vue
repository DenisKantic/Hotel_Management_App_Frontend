<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent app @click="rail = false">
    <v-list-item
      height="64"
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="Hotel SoniLux"
      nav
    >
      <template #append>
        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" />
      </template>
    </v-list-item>

    <v-divider />

    <v-list nav dense>
      <v-list-item prepend-icon="mdi-home-city" title="Home" @click="rail = false" />

      <!-- Reservations Dropdown -->
      <v-list-group prepend-icon="mdi-calendar-check" value="reservations">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="$t('reservations')" @click="rail = false" />
        </template>
        <v-list-item :title="$t('create_reservation')" />
        <v-list-item :title="$t('view_reservations')" />
      </v-list-group>

      <!-- Guests Dropdown -->
      <v-list-group prepend-icon="mdi-account-multiple" value="guests">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="$t('guests')" @click="rail = false" />
        </template>
        <v-list-item :title="$t('create_guest')" />
        <v-list-item :title="$t('guest_info')" />
      </v-list-group>

      <!-- Rooms Dropdown -->
      <v-list-group prepend-icon="mdi-bed" value="rooms">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="$t('rooms')" @click="rail = false" />
        </template>
        <v-list-item title="All Rooms" />
      </v-list-group>

      <!-- Check-in/out Dropdown -->
      <v-list-group prepend-icon="mdi-login" value="checkin">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="Check-in/out" @click="rail = false" />
        </template>
        <v-list-item title="Check-In" />
        <v-list-item title="Check-Out" />
      </v-list-group>

      <!-- Regular Items -->
      <v-list-item prepend-icon="mdi-broom" :title="$t('housekeeping')" @click="rail = false" />
      <v-list-item prepend-icon="mdi-cash-register" :title="$t('payments')" @click="rail = false" />

      <!-- Settings-->
      <v-list-group prepend-icon="mdi-cog" value="settings">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="$t('settings')" @click="rail = false" />
        </template>
        <v-list-item title="User settings" />
        <v-list-item title="Other" />
      </v-list-group>

      <!-- sign off -->
      <v-list-item prepend-icon="mdi-logout" :title="$t('logout')" @click="rail = false" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(false)
</script>

<style scoped>
/* disabling selecting the text on navbar menu items by mistake */
.v-list-item {
  user-select: none;
}
</style>
