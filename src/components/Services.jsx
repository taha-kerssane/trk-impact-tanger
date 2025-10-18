import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const servicesList = [
  {
    icon: "fa-wifi",
    fr: "Wi-Fi rapide et illimité",
    en: "Fast and unlimited Wi-Fi",
    ar: "واي فاي سريع وغير محدود",
  },
  {
    icon: "fa-broom",
    fr: "Nettoyage professionnel",
    en: "Professional cleaning",
    ar: "تنظيف احترافي",
  },
  {
    icon: "fa-key",
    fr: "Entrée autonome 24/7",
    en: "Self check-in 24/7",
    ar: "تسجيل دخول ذاتي 24/7",
  },
  {
    icon: "fa-car",
    fr: "Transfert aéroport",
    en: "Airport transfer",
    ar: "نقل من المطار",
  },
  {
    icon: "fa-concierge-bell",
    fr: "Conciergerie personnalisée",
    en: "Personal concierge service",
    ar: "خدمة كونسيرج مخصصة",
  },
];

export default function Services() {
  const { t, i18n } = useTranslation();

  return (
    <section id="services" className="py-20 bg-dark text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gold mb-10"
      >
        ⚙️ {t("services.title")}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {servicesList.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-gold transition-all shadow-lg"
          >
            <i
              className={`fas ${service.icon} text-gold text-4xl mb-4`}
            ></i>
            <h3 className="text-lg font-semibold text-gray-200">
              {service[i18n.language] || service.fr}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
