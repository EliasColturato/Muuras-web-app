import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ukTranslation from '../locales/uk.json';
import nlTranslation from '../locales/nl.json';

const resources = {
  uk: {
    translation: ukTranslation,
  },
  hl: {
    translation: nlTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: 'uk', // língua padrão
  fallbackLng: 'uk', //língua o idioma selecionado não esteja disponível
  interpolation: {
    escapeValue: false, // permite que use códigos HTML nas traduções
  },
  react: {
    wait: true,
  },
});

export default i18n;
