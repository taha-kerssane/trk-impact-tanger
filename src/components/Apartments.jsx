import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const apartments = [
  {
    id: 1,
    slug: "corniche-vue-mer",
    title: {
      fr: "Corniche Vue Mer",
      en: "Corniche Sea View",
      ar: "كورنيش مطلة على البحر",
    },
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    price: "120€",
  },
  {
    id: 2,
    slug: "city-center-deluxe",
    title: {
      fr: "City Center Deluxe",
      en: "City Center Deluxe",
      ar: "وسط المدينة الفاخر",
    },
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    price: "95€",
  },
  {
    id: 3,
    slug: "marina-luxury-suite",
    title: {
      fr: "Marina Luxury Suite",
      en: "Marina Luxury Suite",
      ar: "جناح مارينا الفاخر",
    },
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    price: "150€",
  },
];

export default function Apartments() {
  const { t, i18n } = useTranslation();

  return (
    <section id="apartments" className="py-20 bg-dark text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gold mb-12"
      >
        🏠 {t("apts.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {apartments.map((apt) => (
          <motion.div
            key={apt.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-neutral-800 hover:border-gold transition-all"
          >
            <div className="relative">
              <img
                src={apt.image}
                alt={apt.title[i18n.language] || apt.title.fr}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-3 left-3 bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                {t("apts.priceFrom")} {apt.price}
                {t("apts.perNight")}
              </div>
            </div>

            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold mb-3">
                {apt.title[i18n.language] || apt.title.fr}
              </h3>
              <div className="flex justify-between items-center">
                <Link
                  to={`/appartement/${apt.slug}`}
                  className="text-gold font-medium hover:underline"
                >
                  {t("apts.details")} →
                </Link>
                <a
                  href="https://wa.me/33619642559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
                >
                  {t("apts.reserve")}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
