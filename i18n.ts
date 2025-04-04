import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // load translations using http (default public/locales)
    .use(Backend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next
    .use(initReactI18next)
    // init i18next
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'de'],
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        ns: ['navbar', 'home', 'about', 'service', 'footer'],
        defaultNS: 'navbar',
        react: {
            useSuspense: false, // Set to false to avoid issues with SSR
        },
    });

export default i18n;