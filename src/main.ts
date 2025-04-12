import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import i18n from './i18n'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

// adding the locale globally as a mixin for translation
app.mixin({
  computed: {
    locale() {
      return i18n.global.locale
    },
  },
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify) // ✅ Add Vuetify here

app.mount('#app')
