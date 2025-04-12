<template>
  <v-card>
    <v-toolbar class="pa-0" flat>
      <v-toolbar-title class="text-none">Hotel</v-toolbar-title>

      <template v-slot:append>
        <!-- Replace magnify icon with translate icon and language dropdown -->
        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon
              class="rounded-circle"
              style="
                width: 40px;
                height: 40px;
                min-width: 40px;
                padding: 0;
                background-color: #f0f0f0;
              "
            >
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="changeLanguage('en')">
              <v-list-item-title>{{ $t('english') }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeLanguage('bhs')">
              <v-list-item-title>{{ $t('bosnian') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn icon="mdi-heart"></v-btn>

        <!-- Circle button with dropdown menu -->
        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon
              class="rounded-circle"
              style="width: 40px; height: 40px; min-width: 40px; background-color: #f0f0f0"
            >
              <v-avatar size="40">
                <img
                  src="https://randomuser.me/api/portraits/men/85.jpg"
                  alt="User Avatar"
                  style="object-fit: contain; width: 100%; height: 100%"
                />
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User Avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>User</v-list-item-title>
                <v-list-item-subtitle>Profile</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n() // Destructure `locale` to access current language setting

const changeLanguage = (language: string) => {
  locale.value = language
}
</script>

<style scoped>
.v-toolbar {
  background-color: transparent !important;
}
</style>
