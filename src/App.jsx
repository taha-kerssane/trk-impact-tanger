import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Apartments from "./components/Apartments";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ApartmentDetails from "./pages/ApartmentDetails";
import LanguageSwitcher from "./components/LanguageSwitcher"; // ✅ Ajout du sélecteur de langue

export const WHATSAPP_NUMBER = "+33619642559";

function Home() {
  return (
    <>
      <Hero />
      <Apartments />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isGoldMode, setIsGoldMode] = useState(false); // ✅ État du mode clair/or

  // ✅ Gestion de la direction du texte pour l’arabe
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // ✅ Scroll vers le haut à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // ✅ Style dynamique (clair/or ou sombre)
  const bgClass = isGoldMode
    ? "bg-[#fdf4dc] text-black transition-all duration-500"
    : "bg-dark text-white transition-all duration-500";

  return (
    <div className={`min-h-screen ${bgClass} ${isGoldMode ? "gold-mode" : ""}`}>
      {/* ✅ Sélecteur de langue et switch clair/or fixés en haut à droite */}
      <div className="fixed top-4 right-4 flex items-center gap-3 z-50">
        <LanguageSwitcher />
        <button
          onClick={() => setIsGoldMode(!isGoldMode)}
          className="border border-gold rounded-full px-3 py-1 text-sm text-gold hover:bg-gold hover:text-black transition-all duration-300 shadow-md"
          aria-label="Changer le thème clair/or"
        >
          {isGoldMode ? "☀️" : "🌙"}
        </button>
      </div>

      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appartement/:slug" element={<ApartmentDetails />} />
          {/* Fallback simple */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
