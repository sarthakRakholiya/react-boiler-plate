import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translator/en.json';

// resources for translation file
const resources = {
  en: {
    translation: en,
  },
};

// config. of translation file
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
