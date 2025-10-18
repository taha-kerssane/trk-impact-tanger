import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const { t, i18n } = useTranslation();

  // Liste multilingue des témoignages
  const reviews = [
    {
      name: "Sofia",
      country: "🇫🇷",
      text: {
        fr: "Séjour parfait ! Vue incroyable sur la mer et accueil chaleureux.",
        en: "Perfect stay! Amazing sea view and warm welcome.",
        ar: "إقامة مثالية! إطلالة رائعة على البحر واستقبال ودود.",
      },
    },
    {
      name: "Youssef",
      country: "🇲🇦",
      text: {
        fr: "Appartement impeccable et très bien situé, je recommande fortement.",
        en: "Impeccable apartment and very well located, highly recommended.",
        ar: "شقة نظيفة جدًا وموقع ممتاز، أنصح بها بشدة.",
      },
    },
    {
      name: "Anna",
      country: "🇬🇧",
      text: {
        fr: "Un vrai coup de cœur pour ce logement, moderne et calme !",
        en: "Fell in love with this apartment — modern and peaceful!",
        ar: "أحببت هذه الشقة حقًا، حديثة وهادئة!",
      },
    },
  ];

  const [index, setIndex] = useState(0);

  // ⏱️ Auto-défilement toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const currentReview = reviews[index];

  return (
    <section
      id="testimonials"
      className="py-24 bg-dark text-white px-6 max-w-5xl mx-auto text-center relative overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold text-gold mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("testimonials.title")}
      </motion.h2>

      <div
        className="relative h-40 flex items-center justify-center"
        onMouseEnter={() => clearInterval()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg italic text-gray-300 leading-relaxed max-w-3xl mx-auto">
              “{currentReview.text[i18n.language] || currentReview.text.fr}”
            </p>
            <div className="mt-6 text-gold font-semibold">
              {currentReview.name} {currentReview.country}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🟡 Indicateurs de navigation */}
      <div className="flex justify-center gap-3 mt-10">
        {reviews.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-gold w-6" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
