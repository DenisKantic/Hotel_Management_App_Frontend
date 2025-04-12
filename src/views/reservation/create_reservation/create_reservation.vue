<template>
  <v-container class="px-10 pt-10">
    <v-card color="blue-lighten-4 pa-10">
      <v-card-title>{{ $t('create_reservation') }}</v-card-title>

      <v-form>
        <v-row>
          <!-- Left Side: User Info -->
          <v-col cols="12" md="6">
            <v-text-field label="Name" v-model="name" required></v-text-field>

            <v-text-field label="Last Name" v-model="lastname" required></v-text-field>

            <v-text-field label="Email" v-model="email" type="email"></v-text-field>

            <v-text-field
              label="Phone Number"
              v-model="phoneNumber"
              required
              type="tel"
            ></v-text-field>
          </v-col>

          <!-- Right Side: Date Picker -->
          <v-col cols="12" md="6">
            <v-locale-provider :locale="locale">
              <v-date-picker
                class="mx-auto"
                v-model="dateRange"
                color="primary"
                range
                locale="de"
                required
                :min="minDate"
                label="Select Date Range"
              ></v-date-picker>
            </v-locale-provider>
          </v-col>
        </v-row>

        <!-- Textarea Below -->
        <v-textarea label="Notes" v-model="notes" required rows="4" full-width></v-textarea>

        <v-btn type="submit" color="primary">{{ $t('submit') }}</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const name = ref('')
const lastname = ref('')
const email = ref('')
const phoneNumber = ref('')
const notes = ref('')
const dateRange = ref([null, null]) // Date range model (start date, end date)

const minDate = new Date().toISOString().split('T')[0] // Today's date in yyyy-mm-dd format
</script>
