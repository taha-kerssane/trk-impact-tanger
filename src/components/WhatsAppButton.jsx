import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "../App";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(
        "Bonjour 👋, je souhaite plus d’informations sur les appartements TRK Impact à Tanger."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gold text-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-gold transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      aria-label="Contactez-nous sur WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </motion.a>
  );
}
