import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./i18n/ES/es.json"
import en from "./i18n/EN/en.json"
import fr from "./i18n/FR/fr.json"
import jp from "./i18n/JP/jp.json"
import pr from "./i18n/PR/pr.json"
import ru from "./i18n/RU/ru.json"
import ch from "./i18n/CH/ch.json"

const resources = {
  es: {
    translation: es
  },
  en: {
    translation: en
  },
  fr: {
    translation: fr
  },
  jp: {
    translation: jp
  },
  pr: {
    translation: pr
  },
  ru: {
    translation: ru
  },
  ch: {
    translation: ch
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;