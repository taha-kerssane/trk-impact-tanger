import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Permet de charger les fichiers de traduction depuis /public ou /src/locales
  .use(LanguageDetector) // Détecte automatiquement la langue du navigateur
  .use(initReactI18next) // Lie i18n à React
  .init({
    fallbackLng: "fr", // Langue par défaut si non détectée
    debug: false, // Passe à true pour tester en console
    interpolation: {
      escapeValue: false, // React gère déjà la protection contre les injections
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"], // Ordre de priorité de détection
      caches: ["localStorage"], // Sauvegarde la langue choisie
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Chemin vers les fichiers JSON
    },
    supportedLngs: ["fr", "en", "ar"], // Langues supportées
  });

export default i18n;
