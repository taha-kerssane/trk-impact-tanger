import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const scrollToApartments = () => {
    const section = document.getElementById("apartments");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-dark overflow-hidden"
    >
      {/* 🌆 Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589391886645-d51941baf7e0?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* 🔲 Overlay doré subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

      {/* 💬 Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          {t("hero.subtitle")}
        </p>
        <button
          onClick={scrollToApartments}
          className="bg-gold text-black font-semibold py-3 px-8 rounded-full text-lg hover:scale-105 hover:shadow-lg transition-all"
        >
          {t("hero.cta")}
        </button>
      </motion.div>

      {/* 💫 Effet visuel bas (scroll hint) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-gold text-2xl"
      >
        ↓
      </motion.div>
    </section>
  );
}
