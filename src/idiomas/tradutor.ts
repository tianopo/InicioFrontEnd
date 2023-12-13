import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJson from './traducoes/en.json'
import frJson from './traducoes/fr.json'
import ptbrJson from './traducoes/ptbr.json'

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: enJson,
    fr: frJson,
    ptbr: ptbrJson,
  }
})

export default i18n;