import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

interface Translation {
  [key: string]: string;
}

interface TranslationResources {
  translation: Translation;
}

interface Resources {
  [key: string]: TranslationResources;
}

const resources: Resources = {
  ru: {
    translation: {
      Zametki: 'Заметки',
      allNotes: 'Все заметки',
      notesExceed: 'Нет заметок',
    },
  },
  uz: {
    translation: {
      Zametki: 'Eslatmalar',
      allNotes: 'Barcha qaydlar',
      notesExceed: "Eslatmalar yo'q",
    },
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: resources,
  });