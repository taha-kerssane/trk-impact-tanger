# TRK Impact Tanger — Pack Images & Meta (ULTIMATE)
Date: 2025-10-19

Ce package contient **toutes les images finales (14/14)** + fichiers publics optimisés pour Vercel.

## Contenu
- `public/assets/img/` : toutes les images validées
- `manifest.json` : PWA + icônes
- `robots.txt` : SEO + Sitemap
- `vercel.json` : cache long pour les images

## WhatsApp officiel
Bouton WhatsApp (front) à utiliser : `https://wa.me/message/BWEN5LCAQK2HB1`

## OG (Open Graph) — index.html
Vérifie que ton `index.html` inclut :
<meta property="og:title" content="TRK Impact Tanger — Conciergerie & Gestion Locative Premium" />
<meta property="og:description" content="Conciergerie premium & gestion locative à Tanger. Appartements de prestige, services 5★, expérience multilingue." />
<meta property="og:image" content="/assets/img/og-image-trk.jpg" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta name="twitter:card" content="summary_large_image" />

## Manifest
Assure-toi que `index.html` référence bien le manifest :
<link rel="manifest" href="/manifest.json" />
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
<link rel="icon" href="/assets/img/favicon-trk.png" />

## Langue par défaut
Le site démarre en **FR**. Si tu utilises i18next, vérifie `lng: 'fr'` dans la config.

## Déploiement
- Upload **le contenu** de ce dossier à la racine du repo (pas le dossier parent).
- Commit: `feat: add Ultimate images & public meta`
- Vercel build -> vérifier `/manifest.json`, `/robots.txt`, `/assets/img/og-image-trk.jpg`.

## Inventaire des images
- logo-trk.png
- favicon-trk.png
- apple-touch-icon.png
- og-image-trk.jpg
- mockup-3d-home.png
- taha.jpg
- malabata.jpg
- iberia.jpg
- bella-vista.jpg
- maintenance.jpg
- concierge.jpg
- client-1.jpg
- client-2.jpg
- client-3.jpg
