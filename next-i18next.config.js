/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
    localeDetection: false,
  },
  fallbackLng: {
    default: ['en'],
    hi: ['hi', 'en'],
  },
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  
  // Custom path for translation files
  localePath: './public/locales',
  
  // Namespace separation
  ns: ['common', 'navigation', 'home', 'services', 'astrology'],
  defaultNS: 'common',
  
  // Interpolation options
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  
  // React options
  react: {
    useSuspense: false,
  },
}
