import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import hr from './locales/hr.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en', // Default language
  messages: {
    en,
    hr,
  },
})

export default i18n
