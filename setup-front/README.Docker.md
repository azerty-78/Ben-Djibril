# Configuration Docker pour Ben Djibril Site

Ce répertoire contient la configuration Docker pour le site web de Ben Djibril.

## ⚠️ Configuration pour intégration avec blogpress-nginx

Ce site est configuré pour être servi via **blogpress-nginx** en reverse proxy. Le container expose uniquement le port 80 en interne sur le réseau `kobecorp-network`.

## Configuration

- **Image Docker** : `ben-djibril-site:latest`
- **Nom du container** : `ben-djibril-site` (⚠️ nom exact requis)
- **Réseau Docker** : `kobecorp-network` (réseau externe)
- **Nom de domaine** : `ben-djibril.kobecorporation.com`
- **Port interne** : `80` (exposé uniquement sur le réseau Docker)
- **Reverse Proxy** : blogpress-nginx (ports 80/443)

## Prérequis

1. **Réseau Docker** : Le réseau `kobecorp-network` doit être créé au préalable :
   ```bash
   docker network create kobecorp-network
   ```

2. **Fichier .env** : Le fichier `.env` a été créé dans le répertoire `setup-front/`. 
   
   **⚠️ IMPORTANT** : Vous devez remplacer toutes les valeurs `your_xxx_here` par vos vraies valeurs EmailJS :
   
   ```env
   VITE_EMAILJS_PUBLIC_KEY=votre_vraie_public_key
   VITE_EMAILJS_SERVICE_ID=votre_vrai_service_id
   VITE_EMAILJS_CONTACT_TEMPLATE_ID=votre_vrai_template_contact_id
   VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=votre_vrai_template_newsletter_id
   ```
   
   Pour obtenir ces valeurs :
   - Consultez le guide dans `docs/EMAILJS_SETUP.md`
   - Ou allez sur https://www.emailjs.com/ et suivez les instructions dans le dashboard

## Utilisation

### 1. Créer le réseau Docker (une seule fois)

```bash
docker network create kobecorp-network
```

### 2. Construire et démarrer le container

```bash
cd setup-front
docker compose up -d --build
```

Le container expose uniquement le port 80 en interne. Le trafic externe passe par **blogpress-nginx**.

### 3. Intégration avec blogpress-nginx

Sur le serveur, exécutez :

```bash
# 1. Trouver le chemin des configs blogpress
docker inspect blogpress-nginx | grep "conf.d" | grep "Source"

# 2. Copier les configs KOBE Corporation (remplacez /chemin par le vrai chemin)
cp /chemin/vers/kobecorporation/setup-kobe-proxy/conf.d/*.conf /chemin/vers/blogpress/conf.d/

# 3. Connecter blogpress-nginx au réseau kobecorp-network
docker network connect kobecorp-network blogpress-nginx

# 4. Tester la config
docker exec blogpress-nginx nginx -t

# 5. Recharger nginx
docker exec blogpress-nginx nginx -s reload
```

### 4. Obtenir les certificats SSL

```bash
# Utiliser le certbot existant de blogpress
docker exec blogpress-certbot certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email contact@kobecorporation.com \
  --agree-tos \
  --no-eff-email \
  -d ben-djibril.kobecorporation.com
```

### Test de la configuration Nginx (optionnel)

Avant de construire l'image, vous pouvez tester la configuration Nginx :

**Sur Linux/Mac :**
```bash
cd setup-front
./test-nginx.sh
```

**Sur Windows (PowerShell) :**
```powershell
cd setup-front
.\test-nginx.ps1
```

### Construction de l'image

```bash
cd setup-front
docker compose build
```

### Démarrage du container

```bash
docker compose up -d
```

### Arrêt du container

```bash
docker compose down
```

### Voir les logs

```bash
docker compose logs -f
```

### Reconstruire et redémarrer

```bash
docker compose up -d --build
```

### Test manuel de Nginx

Pour tester uniquement la configuration Nginx :

```bash
docker run --rm -v "$(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro" nginx:alpine nginx -t
```

## Configuration Traefik

Le fichier `compose.yaml` inclut des labels Traefik pour la configuration automatique du reverse proxy :

- **Router** : `ben-djibril`
- **Rule** : `Host(\`ben-djibril.kobecorporation.com\`)`
- **Entrypoint** : `websecure` (HTTPS)
- **Certificat SSL** : Géré par Let's Encrypt via Traefik

Assurez-vous que Traefik est configuré et connecté au même réseau `kobecorp-network`.

## Structure

```
setup-front/
├── Dockerfile          # Configuration de l'image Docker
├── compose.yaml        # Configuration Docker Compose
├── .dockerignore       # Fichiers à exclure du build
└── README.Docker.md    # Ce fichier
```

## Configuration Nginx

Le fichier `nginx.conf` configure Nginx pour :
- Servir les fichiers statiques de l'application React
- Gérer le routing SPA (toutes les routes pointent vers `index.html`)
- Compression Gzip pour les assets
- Headers de sécurité (X-Frame-Options, X-Content-Type-Options, etc.)
- Cache optimisé pour les assets statiques (1 an)
- Pas de cache pour les fichiers HTML
- Health check endpoint sur `/health`

## Notes

- L'application est construite en deux étapes : build et production
- Nginx sert les fichiers statiques sur le port 80
- Configuration optimisée pour les performances et la sécurité
- Support du routing SPA (React Router)
- Health check disponible sur `/health`
