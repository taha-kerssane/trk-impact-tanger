import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { WHATSAPP_NUMBER } from "../App";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-dark text-center relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gold mb-4"
      >
        {t("contact.title")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 max-w-2xl mx-auto mb-10"
      >
        {t("contact.subtitle")}
      </motion.p>

      {/* 💬 Bouton WhatsApp */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-12"
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(
            "Bonjour 👋, je souhaite obtenir des informations sur les logements disponibles à Tanger."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-md"
        >
          <i className="fab fa-whatsapp text-xl"></i> {t("contact.cta")}
        </a>
      </motion.div>

      {/* 🗺️ Carte intégrée */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-4xl mx-auto shadow-2xl border border-neutral-800 rounded-2xl overflow-hidden"
      >
        <iframe
          title="Google Map Tanger"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.306329911293!2d-5.804476784756698!3d35.77629143039244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b884c7264f4f7%3A0x3bb920c1b184b97e!2sTanger!5e0!3m2!1sfr!2sma!4v1709478166327!5m2!1sfr!2sma"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* ✨ Effet visuel subtil */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black opacity-20"></div>
    </section>
  );
}
