import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
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
    },
  })
