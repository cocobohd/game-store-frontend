import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const languages = ["en"];

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: languages,
  debug: false,
  load: "languageOnly",
  supportedLngs: languages,
  initImmediate: false,
});

export default i18n;
