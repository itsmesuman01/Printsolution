import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en/translation.json';
import npTranslations from './np/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      np: {
        translation: npTranslations,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
