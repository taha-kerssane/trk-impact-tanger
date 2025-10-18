import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-white/10 p-6 bg-black"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">{t("about.title")}</h2>
        <p className="mt-3 text-white/70">{t("about.text")}</p>
      </motion.div>
    </section>
  );
}
