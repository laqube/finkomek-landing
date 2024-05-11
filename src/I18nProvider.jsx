import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translation_kz from "./locales/kz/translation.json";
import translation_ru from "./locales/ru/translation.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: false,
    resources: {
      kz: { translation: translation_kz },
      ru: { translation: translation_ru },
    },
    detection: {
      order: ["queryString", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });
const I18nProvider = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default I18nProvider;
