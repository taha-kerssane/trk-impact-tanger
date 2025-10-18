import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_NUMBER } from "../App";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const navItems = [
    { id: "home", label: t("nav.home"), href: "/" },
    { id: "apartments", label: t("nav.apartments"), href: "#apartments" },
    { id: "about", label: t("nav.about"), href: "#about" },
    { id: "services", label: t("nav.services"), href: "#services" },
    { id: "contact", label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-gold font-bold text-xl hover:opacity-90 transition"
        >
          TRK Impact Premium
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-gray-300 hover:text-gold transition text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Lang Selector + WhatsApp */}
        <div className="hidden md:flex items-center gap-5">
          {/* 🌍 Lang Switch */}
          <div className="flex gap-2">
            {["fr", "en", "ar"].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`text-sm uppercase font-semibold ${
                  i18n.language === lng ? "text-gold" : "text-gray-400"
                } hover:text-gold transition`}
              >
                {lng}
              </button>
            ))}
          </div>

          {/* 💬 WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Burger menu (mobile) */}
        <button
          className="md:hidden text-gray-300 hover:text-gold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Menu Mobile animé */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-black/95 text-gray-300 px-6 pb-8"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg hover:text-gold transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex justify-between items-center mt-6">
              {/* Lang Switch mobile */}
              <div className="flex gap-3">
                {["fr", "en", "ar"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`text-sm uppercase ${
                      i18n.language === lng ? "text-gold" : "text-gray-400"
                    } hover:text-gold`}
                  >
                    {lng}
                  </button>
                ))}
              </div>

              {/* WhatsApp bouton mobile */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
