## Configuration

### 1. Créer le fichier .env

Avant de lancer le container, vous devez créer un fichier `.env` dans le dossier `setup-front` avec vos variables d'environnement :

```env
# Configuration EmailJS
VITE_EMAILJS_PUBLIC_KEY=votre_public_key_ici
VITE_EMAILJS_SERVICE_ID=votre_service_id_ici
VITE_EMAILJS_CONTACT_TEMPLATE_ID=votre_template_contact_id_ici
VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=votre_template_newsletter_id_ici

# Configuration du serveur
NODE_ENV=production
PORT=5180
```

**Important** : Remplacez les valeurs `votre_*_ici` par vos vraies clés EmailJS. Pour obtenir ces clés, consultez le fichier `docs/EMAILJS_SETUP.md`.

### 2. Construire et lancer l'application

Une fois le fichier `.env` créé, lancez l'application avec :

```bash
cd setup-front
docker compose up --build
```

L'application sera disponible à l'adresse : **http://localhost:5180**

### 3. Arrêter l'application

Pour arrêter le container :

```bash
docker compose down
```

## Déploiement en production

### Build de l'image

Pour construire l'image Docker :

```bash
cd setup-front
docker build -t ben-djibril-app -f Dockerfile ..
```

Si votre serveur utilise une architecture différente (ex: amd64 sur un Mac M1) :

```bash
docker build --platform=linux/amd64 -t ben-djibril-app -f Dockerfile ..
```

### Push vers un registry

```bash
docker tag ben-djibril-app votre-registry.com/ben-djibril-app
docker push votre-registry.com/ben-djibril-app
```

## Architecture du Dockerfile

Le Dockerfile utilise un build multi-stage :
- **Stage 1 (builder)** : Installe les dépendances et build l'application avec Vite
- **Stage 2 (production)** : Copie uniquement les fichiers buildés et sert l'application avec `vite preview`

Cela permet d'obtenir une image finale plus légère et optimisée pour la production.

## Références

* [Documentation Docker](https://docs.docker.com/go/get-started-sharing/)
* [Guide Docker pour Node.js](https://docs.docker.com/language/nodejs/)
* [Documentation Vite](https://vitejs.dev/)