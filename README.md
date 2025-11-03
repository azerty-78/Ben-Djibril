# BenDev - Portfolio Professionnel

Portfolio professionnel moderne avec support multilingue (FR/EN), thème clair/sombre, et design responsive.

## 🚀 Technologies

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS 3** (styling)
- **React Router** (routing)
- **i18next** (internationalisation)
- **Headless UI** (composants accessibles)
- **Heroicons** + **React Icons** (icônes)
- **Framer Motion** (animations)
- **EmailJS** (formulaire de contact)

## 📋 Informations à fournir pour personnaliser le site

### Informations personnelles
- [ ] Nom complet et titre professionnel
- [ ] Photo de profil (format recommandé: 400x400px, format WebP/AVIF)
- [ ] Bio courte (2-3 phrases)
- [ ] Bio longue (paragraphe détaillé)
- [ ] Email professionnel
- [ ] Téléphone (format international)
- [ ] Localisation (ville, pays)
- [ ] Disponibilité (ex: "Disponible pour projets freelance", "Recherche CDI", etc.)

### Services à vendre
- [ ] Liste des services (titre, description, tarifs indicatifs)
- [ ] Packages/Offres (Starter, Pro, Enterprise) avec détails et prix
- [ ] Durée moyenne de livraison par service
- [ ] Technologies/langages maîtrisés (pour tags)

### Projets/Portfolio
Pour chaque projet:
- [ ] Nom du projet
- [ ] Description (problème résolu, solution, impact)
- [ ] Technologies utilisées
- [ ] Images/visuels (screenshots, mockups)
- [ ] Lien vers le projet (si public)
- [ ] Lien vers le code source (si open source)
- [ ] Client (nom ou "Projet personnel")
- [ ] Date de réalisation

### Témoignages
- [ ] Nom du client/partenaire
- [ ] Photo/avatar (ou logo entreprise)
- [ ] Poste/fonction
- [ ] Texte du témoignage
- [ ] Note/évaluation (sur 5 étoiles)
- [ ] Nom de l'entreprise (optionnel)

### Métriques/Badges de confiance
- [ ] Nombre de clients servis
- [ ] Nombre de projets livrés
- [ ] Note NPS moyenne (si disponible)
- [ ] Temps de réponse moyen
- [ ] Taux de satisfaction
- [ ] Logos d'entreprises/clients (images SVG/PNG)

### Contact & Réseaux sociaux
- [ ] EmailJS Public Key (pour formulaire)
- [ ] EmailJS Service ID
- [ ] EmailJS Template ID
- [ ] LinkedIn (URL complète)
- [ ] GitHub (URL complète)
- [ ] Twitter/X (URL complète)
- [ ] Autres réseaux (dribbble, behance, etc.)

### SEO
- [ ] Meta description (150-160 caractères)
- [ ] Mots-clés principaux
- [ ] Open Graph image (1200x630px)
- [ ] Favicon (32x32px, formats multiples)

## 🎨 Palette de couleurs

### Mode clair
- **Primary**: Indigo (#6366f1)
- **Secondary**: Slate (gris neutre)
- **Accent**: Rose (#f43f5e)
- **Success**: Vert émeraude
- **Warning**: Jaune ambre
- **Danger**: Rouge

### Mode sombre
Même palette avec ajustements automatiques pour contraste optimal.

## 📱 Responsivité

Le site est optimisé pour :
- **Mobile** (< 640px)
- **Tablette** (640px - 1024px)
- **Desktop** (> 1024px)
- **Large Desktop** (> 1280px)

Breakpoints Tailwind utilisés : `sm:`, `md:`, `lg:`, `xl:`

## 🛠️ Développement

### Installation
```bash
npm install
```

### Développement local
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5180`

### Build de production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base
│   └── sections/       # Sections de pages
├── pages/              # Pages de l'application
├── layouts/            # Layouts partagés
├── shared/             # Composants partagés (Navbar, Footer, etc.)
├── theme/              # Gestion du thème
├── i18n/               # Configuration i18n et traductions
├── hooks/              # Hooks personnalisés
└── utils/              # Utilitaires
```

## 🌐 Internationalisation

Le site supporte **Français** (par défaut) et **Anglais**.

Les traductions sont dans `src/i18n/index.ts`. Le site détecte automatiquement la langue du navigateur ou utilise celle sauvegardée dans `localStorage`.

## 🎯 Fonctionnalités

- ✅ Routing multi-pages (React Router)
- ✅ Thème clair/sombre avec persistence
- ✅ Multilingue (FR/EN) avec détection navigateur
- ✅ Design responsive
- ✅ Animations fluides (Framer Motion)
- ✅ Formulaire de contact (EmailJS)
- ✅ SEO-friendly (meta tags par page)
- ✅ Performance optimisée (lazy loading, prefetch)

## 📝 Prochaines étapes

1. Remplir les informations personnelles dans les composants
2. Ajouter tes projets réels dans `src/data/projects.ts`
3. Ajouter tes témoignages dans `src/data/testimonials.ts`
4. Configurer EmailJS avec tes clés API
5. Ajouter tes images/visuels (optimisées WebP/AVIF)
6. Déployer sur Vercel/Netlify

## 📄 Licence

Propriétaire - Tous droits réservés
