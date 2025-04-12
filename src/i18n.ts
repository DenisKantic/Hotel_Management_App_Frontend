import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import bhs from './locales/bhs.json'

const i18n = createI18n({
  legacy: false,
  locale: 'bhs', // Default language
  messages: {
    en,
    bhs,
  },
})

export default i18n
