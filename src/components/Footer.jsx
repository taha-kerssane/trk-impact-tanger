import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "../App";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer
      className={`bg-black text-gray-400 py-10 border-t border-neutral-800 ${
        i18n.language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* 🏙️ Bloc gauche : logo + texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-gold text-2xl font-bold mb-2">TRK Impact Premium</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            {t("about.text")}
          </p>
        </motion.div>

        {/* 📞 Bloc central : contact & WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <h4 className="text-gold text-lg font-semibold mb-2">{t("contact.title")}</h4>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(
              "Bonjour 👋, je souhaite obtenir des informations sur les logements disponibles à Tanger."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-all"
          >
            <i className="fab fa-whatsapp text-xl text-gold"></i>
            {t("contact.cta")}
          </a>
          <p className="text-sm text-gray-500">📍 Tanger, Maroc</p>
        </motion.div>

        {/* 🌍 Bloc droit : langues & mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`flex flex-col ${
            i18n.language === "ar" ? "items-end" : "items-start"
          }`}
        >
          <h4 className="text-gold text-lg font-semibold mb-2">
            🌐 {i18n.language === "fr"
              ? "Langue"
              : i18n.language === "en"
              ? "Language"
              : "اللغة"}
          </h4>
          <div className="flex gap-3 text-sm">
            <button
              onClick={() => i18n.changeLanguage("fr")}
              className={`hover:text-gold ${
                i18n.language === "fr" ? "text-gold font-semibold" : ""
              }`}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`hover:text-gold ${
                i18n.language === "en" ? "text-gold font-semibold" : ""
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => i18n.changeLanguage("ar")}
              className={`hover:text-gold ${
                i18n.language === "ar" ? "text-gold font-semibold" : ""
              }`}
            >
              🇲🇦 العربية
            </button>
          </div>
        </motion.div>
      </div>

      {/* ⚖️ Bas de page */}
      <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>{t("footer.rights")}</p>
        <p className="mt-1">
          Designed & developed by{" "}
          <span className="text-gold font-semibold">Taha Kerssane</span> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
