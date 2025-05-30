'use client'

import React, { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import enCommon from '../../../public/locales/en/common.json'
import hiCommon from '../../../public/locales/hi/common.json'
import enHome from '../../../public/locales/en/home.json'
import hiHome from '../../../public/locales/hi/home.json'
import enFooter from '../../../public/locales/en/footer.json'
import hiFooter from '../../../public/locales/hi/footer.json'

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        footer: enFooter,
      },
      hi: {
        common: hiCommon,
        home: hiHome,
        footer: hiFooter,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    react: {
      useSuspense: false,
    },
  })

interface I18nProviderProps {
  children: React.ReactNode
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage && ['en', 'hi'].includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage)
      document.documentElement.lang = savedLanguage
    }
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}
