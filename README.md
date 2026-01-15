# Ben Djibril - Portfolio Professionnel

Portfolio professionnel moderne d'un Ingénieur DevOps spécialisé en développement backend, mobile et DevOps. Site web avec support multilingue (FR/EN), thème clair/sombre, et design responsive optimisé pour la vente de services internationaux.

## 👨‍💻 À propos

**Ben Djibril** (Kone Djibril Benjamin) est un développeur médior avec 4 ans d'expérience en développement backend et mobile. Spécialisé en DevOps, backend (Spring Boot) et mobile (Kotlin), il offre des services de développement web, applications mobiles, APIs et DevOps à l'international.

### Spécialités
- **Backend** : Spring Boot (Java/Kotlin)
- **Mobile** : Kotlin Multiplatform
- **DevOps** : Docker, Kubernetes, Ansible
- **Frontend** : React, TypeScript
- **Cloud** : AWS, Hostinger, Vercel

### Certifications
- ✅ Docker Certified Associate (DCA)
- ✅ AWS Certified Cloud Practitioner

## 🚀 Technologies

### Stack Principal
- **React 19** + **TypeScript** - Framework frontend
- **Vite 7** - Build tool et bundler
- **Tailwind CSS 3** - Framework CSS utility-first
- **React Router DOM 7** - Routing multi-pages
- **i18next** + **react-i18next** - Internationalisation (FR/EN)
- **Headless UI** - Composants accessibles
- **Heroicons** + **React Icons** - Bibliothèque d'icônes
- **Framer Motion** - Animations fluides
- **EmailJS** - Service de formulaire de contact

### Technologies Maîtrisées

#### Langages de Programmation
1. Kotlin
2. Java
3. HTML/CSS
4. JavaScript
5. C/C++
6. TypeScript
7. Python

#### Frameworks
- **Backend** : Spring Boot (Java/Kotlin)
- **Frontend** : React
- **Mobile** : Kotlin Multiplatform

#### Bases de Données
- **SQL** : MySQL, PostgreSQL
- **NoSQL** : MongoDB

#### Technologies DevOps
- Docker
- Kubernetes
- Ansible

#### Hébergement
- AWS
- Hostinger
- Ngrok
- NS
- Vercel

#### Design
- Figma
- Canva

#### Versioning
- Git & GitHub

## 📋 Pages Disponibles

- **Home** (`/`) - Page d'accueil avec Hero, À propos, Services, Certifications, Témoignages
- **Services** (`/services`) - Liste détaillée des services avec packages et pricing
- **Projects** (`/projects`) - Portfolio de projets réalisés
- **About** (`/about`) - Page détaillée à propos avec stack technique complète
- **Contact** (`/contact`) - Formulaire de contact avec EmailJS

## 🎨 Palette de Couleurs

### Mode Clair
- **Primary** : Indigo (#6366f1) - Couleur principale
- **Secondary** : Slate (gris neutre) - Texte et arrière-plans
- **Accent** : Rose (#f43f5e) - Accents et highlights
- **Success** : Vert émeraude - Messages de succès
- **Warning** : Jaune ambre - Avertissements
- **Danger** : Rouge - Erreurs

### Mode Sombre
Même palette avec ajustements automatiques pour contraste optimal et lisibilité.

## 📱 Responsivité

Le site est entièrement responsive et optimisé pour :
- **Mobile** (< 640px) - Smartphones
- **Tablette** (640px - 1024px) - Tablettes
- **Desktop** (> 1024px) - Ordinateurs
- **Large Desktop** (> 1280px) - Grands écrans

Breakpoints Tailwind utilisés : `sm:`, `md:`, `lg:`, `xl:`

## 🛠️ Développement

### Prérequis
- Node.js 18+ et npm

### Installation
```bash
npm install
```

### Développement local
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5180`

### Partage avec ngrok
Pour partager votre application en développement via ngrok :
```bash
npm run ngrok
```
Voir [docs/NGROK_SETUP.md](docs/NGROK_SETUP.md) pour plus de détails.

### Build de production
```bash
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualisation du build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Structure du Projet

```
ben-djibril/
├── public/                 # Fichiers statiques
│   ├── favicon.jpg        # Favicon du site
│   └── vite.svg           # (remplacé par favicon)
├── src/
│   ├── assets/            # Assets (images, etc.)
│   │   └── bendjibril.jpg # Photo de profil
│   ├── components/        # Composants réutilisables
│   │   ├── ui/            # Composants UI de base
│   │   │   ├── TechStack.tsx
│   │   │   ├── CountUp.tsx
│   │   │   ├── LazyImage.tsx
│   │   │   ├── PackageCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── CertificationCard.tsx
│   │   │   └── MobileMenu.tsx
│   │   └── sections/     # Sections de pages
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── CertificationsSection.tsx
│   │       └── TestimonialsSection.tsx
│   ├── pages/             # Pages de l'application
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── layouts/           # Layouts partagés
│   │   └── RootLayout.tsx
│   ├── shared/            # Composants partagés
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── ErrorBoundary.tsx
│   ├── theme/             # Gestion du thème
│   │   └── ThemeProvider.tsx
│   ├── i18n/              # Configuration i18n
│   │   └── index.ts       # Traductions FR/EN
│   ├── hooks/             # Hooks personnalisés
│   │   └── usePrefetch.ts # Prefetch des routes
│   ├── data/              # Données statiques
│   │   ├── techStack.ts
│   │   ├── companies.ts
│   │   ├── certifications.ts
│   │   └── mockData.ts
│   ├── App.tsx            # Composant racine avec routes
│   ├── main.tsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── index.html             # Template HTML
├── tailwind.config.js     # Configuration Tailwind
├── vite.config.ts         # Configuration Vite
├── tsconfig.json          # Configuration TypeScript
└── package.json           # Dépendances
```

## 🌐 Internationalisation

Le site supporte **Français** (par défaut) et **Anglais**.

### Fonctionnalités
- Détection automatique de la langue du navigateur
- Persistance de la langue choisie dans `localStorage`
- Changement de langue facile via le sélecteur dans la navbar
- Interface complètement traduite (FR/EN)

Les traductions sont dans `src/i18n/index.ts`.

## 🎯 Fonctionnalités Principales

- ✅ **Routing multi-pages** - Navigation fluide avec React Router
- ✅ **Thème clair/sombre** - Persistance avec `localStorage`
- ✅ **Multilingue (FR/EN)** - Détection navigateur automatique
- ✅ **Design responsive** - Optimisé pour tous les écrans
- ✅ **Animations fluides** - Framer Motion pour les interactions
- ✅ **Formulaire de contact** - Intégration EmailJS
- ✅ **SEO-friendly** - Meta tags optimisés par page
- ✅ **Performance optimisée** - Lazy loading, prefetch, images optimisées
- ✅ **Accessibilité** - Composants Headless UI
- ✅ **Error Boundary** - Gestion d'erreurs globale
- ✅ **Tech Stack visuel** - Affichage des technologies avec logos officiels
- ✅ **Certifications** - Section dédiée aux certifications professionnelles
- ✅ **Témoignages** - Carrousel de témoignages clients
- ✅ **Métriques animées** - Compteurs animés pour les statistiques

## 📊 Services Disponibles

1. **Développement Web** - Sites web modernes et responsives
2. **Sites Vitrines** - Sites professionnels pour entreprises
3. **Portfolio** - Portfolios personnels ou professionnels
4. **E-commerce** - Boutiques en ligne complètes
5. **Applications Web** - Solutions web personnalisées
6. **Applications Mobile** - Apps cross-platform avec Kotlin Multiplatform
7. **Applications Desktop** - Applications desktop natives
8. **API Development** - RESTful et GraphQL APIs
9. **DevOps & Cloud** - Infrastructure et déploiement
10. **Consulting** - Conseil et audits techniques

## 📞 Contact

- **Email** : bendjiril789@gmail.com
- **Téléphone** : +237 655 938 501
- **Localisation** : Yaoundé, Cameroun
- **WhatsApp** : [Contacter via WhatsApp](https://wa.me/237655938501)

### Réseaux Sociaux
- **X (Twitter)** : [@le_bendji](https://x.com/le_bendji)
- **LinkedIn** : [Ben-Djibril](https://www.linkedin.com/in/Ben-Djibril)
- **GitHub** : [azerty-78](https://github.com/azerty-78)

## 🏢 Clients & Partenaires

- **UY2 SOA** - Université de Yaoundé 2
- **ENS Y** - École Normale Supérieure de Yaoundé
- **Kobe Corp** - Kobe Corporation

## 📝 Configuration EmailJS

Pour activer le formulaire de contact, configurez vos clés EmailJS dans `src/pages/Contact.tsx` :

```typescript
const PUBLIC_KEY = 'votre-public-key'
const SERVICE_ID = 'votre-service-id'
const TEMPLATE_ID = 'votre-template-id'
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Déployer le dossier dist/ sur Netlify
```

### Autres plateformes
Le build génère un dossier `dist/` statique qui peut être déployé sur n'importe quel hébergeur statique.

## 📄 Licence

Propriétaire - Tous droits réservés © 2024 Ben Djibril

---

**Développé avec ❤️ par Ben Djibril**
