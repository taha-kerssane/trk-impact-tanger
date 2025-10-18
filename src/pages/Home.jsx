import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-dark text-white">
      {/* HERO */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          className="relative z-10 px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            {t("hero.subtitle")}
          </p>
          <Link
            to="#apartments"
            className="bg-gold text-black font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300"
          >
            {t("hero.cta")}
          </Link>
        </motion.div>
      </section>

      {/* NOS APPARTEMENTS */}
      <section id="apartments" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🏠 {t("apts.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-black/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-gold transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={`https://picsum.photos/800/600?random=${i}`}
                alt={`Appartement ${i}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gold">
                  Appartement {i}
                </h3>
                <p className="text-gray-400 mb-4">
                  Vue mer, moderne et lumineux — parfait pour un séjour à
                  Tanger.
                </p>
                <Link
                  to={`/appartement/${i === 1 ? "corniche-vue-mer" : i === 2 ? "marina-luxury" : "centre-ville-design"}`}
                  className="text-gold hover:underline font-medium"
                >
                  {t("apts.details")} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="py-20 bg-black/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-gold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("about.title")}
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("about.text")}
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          💎 {t("services.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {t("services.list", { returnObjects: true }).map((srv, i) => (
            <motion.div
              key={i}
              className="bg-black/50 rounded-xl p-6 border border-gold/20 text-center hover:border-gold transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-gray-200 font-medium">{srv}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section
        id="testimonials"
        className="py-20 bg-black/40 text-center px-6"
      >
        <motion.h2
          className="text-3xl font-bold text-gold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          💬 {t("testimonials.title")}
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.blockquote
            className="text-gray-300 italic border-l-4 border-gold pl-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            “{t("testimonials.a")}”
          </motion.blockquote>

          <motion.blockquote
            className="text-gray-300 italic border-l-4 border-gold pl-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            “{t("testimonials.b")}”
          </motion.blockquote>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-6">
        <motion.h2
          className="text-3xl font-bold text-gold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          📞 {t("contact.title")}
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t("contact.subtitle")}
        </motion.p>
        <a
          href="https://wa.me/33619642559"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-black font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 inline-block"
        >
          {t("contact.cta")}
        </a>
      </section>
    </div>
  );
}
