// src/components/LanguageSwitcher.jsx
import React from "react";
import i18n from "../i18n/i18n";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const languages = [
    { code: "fr", label: "🇫🇷" },
    { code: "en", label: "🇬🇧" },
    { code: "ar", label: "🇲🇦" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <motion.div
      className="fixed top-4 right-4 flex gap-2 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`rounded-full border border-gold px-2 py-1 text-sm font-semibold transition-all duration-300
            ${
              i18n.language === code
                ? "bg-gold text-black shadow-lg scale-105"
                : "bg-transparent text-gold hover:bg-gold/20"
            }`}
        >
          {label}
        </button>
      ))}
    </motion.div>
  );
}
