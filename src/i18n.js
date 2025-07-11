import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/en.json';
import translationTR from './locales/tr/tr.json';

const resources = {
  en: { translation: translationEN },
  tr: { translation: translationTR }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // varsayılan dil
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React zaten XSS koruması sağlıyor
    }
  });

export default i18n;
