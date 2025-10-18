import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { WHATSAPP_NUMBER } from "../App";

const apartments = [
  {
    slug: "corniche-vue-mer",
    title: {
      fr: "Corniche Vue Mer",
      en: "Corniche Sea View",
      ar: "كورنيش مطلة على البحر",
    },
    description: {
      fr: "Appartement lumineux avec terrasse et vue panoramique sur la mer, idéalement situé à proximité de la corniche.",
      en: "Bright apartment with panoramic sea view terrace, ideally located near the Corniche.",
      ar: "شقة مشرقة بإطلالة بانورامية على البحر، تقع بالقرب من الكورنيش.",
    },
    images: [
      "https://images.unsplash.com/photo-1589391886645-d51941baf7e0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490359854-dfba19688f4c?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "120€",
    equipment: ["Wi-Fi", "TV", "Climatisation", "Cuisine équipée", "Balcon"],
    location: "Corniche de Tanger",
  },
  {
    slug: "city-center-deluxe",
    title: {
      fr: "City Center Deluxe",
      en: "City Center Deluxe",
      ar: "وسط المدينة الفاخر",
    },
    description: {
      fr: "Appartement moderne en plein cœur de Tanger, parfait pour les séjours urbains et professionnels.",
      en: "Modern apartment in the heart of Tangier, perfect for business or leisure stays.",
      ar: "شقة حديثة في قلب طنجة، مثالية للإقامات الحضرية أو المهنية.",
    },
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154164-2c5aa1a5806c?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "95€",
    equipment: ["Ascenseur", "Parking", "Wi-Fi", "Cuisine moderne", "Vue ville"],
    location: "Centre-ville, Tanger",
  },
  {
    slug: "marina-luxury-suite",
    title: {
      fr: "Marina Luxury Suite",
      en: "Marina Luxury Suite",
      ar: "جناح مارينا الفاخر",
    },
    description: {
      fr: "Suite luxueuse avec vue directe sur la marina et un design intérieur raffiné.",
      en: "Luxury suite with direct view over the marina and elegant interior design.",
      ar: "جناح فاخر بإطلالة مباشرة على المارينا وتصميم داخلي أنيق.",
    },
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "150€",
    equipment: ["Piscine", "Concierge 24/7", "Wi-Fi haut débit", "Climatisation"],
    location: "Marina Bay, Tanger",
  },
];

export default function ApartmentDetails() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();

  const apt = apartments.find((a) => a.slug === slug);

  if (!apt) {
    return (
      <div className="text-center py-20 text-gray-300">
        <h2 className="text-3xl mb-4">Appartement introuvable</h2>
        <Link to="/" className="text-gold hover:underline">
          {t("details.back")}
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-dark text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* 🏠 Titre + retour */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gold">
            {apt.title[i18n.language] || apt.title.fr}
          </h1>
          <Link
            to="/"
            className="text-gray-400 hover:text-gold transition-all"
          >
            {t("details.back")}
          </Link>
        </div>

        {/* 🖼️ Galerie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
        >
          {apt.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${apt.title.fr} ${i + 1}`}
              className="rounded-xl object-cover w-full h-80"
            />
          ))}
        </motion.div>

        {/* 🧾 Description */}
        <p className="text-lg mb-6 text-gray-300">
          {apt.description[i18n.language] || apt.description.fr}
        </p>

        {/* 🧩 Équipements */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            {t("details.equip")}
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-400">
            {apt.equipment.map((item, idx) => (
              <li
                key={idx}
                className="border border-neutral-700 rounded-lg px-3 py-2 hover:border-gold transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 📍 Localisation */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">
            {t("details.location")}
          </h3>
          <p className="text-gray-400">{apt.location}</p>
        </div>

        {/* 💬 Bouton Réservation */}
        <div className="text-center mt-10">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(
              `Bonjour, je souhaite réserver l’appartement "${apt.title.fr}".`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all inline-block"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            {t("details.reserve")}
          </a>
        </div>
      </div>
    </section>
  );
}
