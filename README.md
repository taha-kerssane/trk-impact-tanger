🏠 TRK Impact Tanger – Conciergerie & Gestion Locative Premium

Site web professionnel, multilingue (🇫🇷 / 🇬🇧 / 🇲🇦), optimisé pour la performance, le référencement et la conversion.
Développé avec React + Vite + TailwindCSS + Framer Motion, et déployé via Vercel.

🌍 Aperçu du projet

TRK Impact Tanger est une plateforme haut de gamme dédiée à la gestion locative courte durée et à la conciergerie de prestige à Tanger.
L’objectif est de proposer une expérience fluide, immersive et multilingue aux voyageurs, propriétaires et partenaires.

Le site inclut :

🏡 Une présentation claire des appartements (vue mer, corniche, centre-ville…)

📸 Des pages détaillées par logement avec galerie, carte et bouton de réservation WhatsApp

💬 Une intégration multilingue (Français / Anglais / Arabe)

✨ Un design noir & or premium, responsive et animé

📱 Un bouton WhatsApp flottant vers le service client officiel

⚙️ Une architecture optimisée SEO + Vercel Build pour un temps de chargement instantané

🧠 Technologies utilisées
Catégorie	Outils & Frameworks
Frontend	React + Vite
Style	TailwindCSS + FontAwesome
Animations	Framer Motion
Multilingue	i18next + react-i18next
Déploiement	Vercel
Tracking	Google Analytics 4 + Meta Pixel
Code Quality	ESLint
📁 Structure du projet
trk-impact-tanger/
│
├── public/
│   ├── vite.svg
│   └── favicon.png
│
├── src/
│   ├── assets/              # Images & icônes
│   ├── components/          # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Apartments.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   │
│   ├── pages/
│   │   └── ApartmentDetails.jsx
│   │
│   ├── i18n/                # Traductions & config i18next
│   │   ├── i18n.js
│   │   ├── locales/
│   │   │   ├── fr.json
│   │   │   ├── en.json
│   │   │   └── ar.json
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── tailwind.config.js
│
├── package.json
├── postcss.config.js
├── vite.config.js
└── README.md