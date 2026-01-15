# 🔒 Guide de Configuration SSL/TLS avec Certbot

Ce guide explique comment configurer les certificats SSL/TLS pour votre application ben-djibril sur votre VPS en utilisant Certbot et Let's Encrypt.

## 📋 Prérequis

- Un VPS avec Docker installé
- Un nom de domaine pointant vers votre VPS
- Accès SSH au serveur
- Ports 80 et 443 ouverts dans le firewall

## 🚀 Configuration SSL avec Certbot (Docker)

### Étape 1: Préparer la structure

Sur votre VPS, créez la structure suivante pour Certbot :

```bash
mkdir -p ~/certbot/conf
mkdir -p ~/certbot/www
```

### Étape 2: Créer le docker-compose pour Certbot

Créez un fichier `~/certbot/docker-compose.yml` :

```yaml
version: '3.8'

services:
  certbot:
    image: certbot/certbot:latest
    container_name: ben-djibril-certbot
    volumes:
      - ./conf:/etc/letsencrypt
      - ./www:/var/www/certbot
    networks:
      - kobecorp-network
    restart: unless-stopped
    command: certonly --webroot --webroot-path=/var/www/certbot --email bendjiril789@gmail.com --agree-tos --no-eff-email -d votre-domaine.com -d www.votre-domaine.com

networks:
  kobecorp-network:
    name: kobecorp-network
    external: true
```

**⚠️ Important:** Remplacez `votre-domaine.com` par votre vrai nom de domaine.

### Étape 3: Configurer Nginx pour le challenge ACME

Votre conteneur Nginx (blogpress-nginx ou ben-djibril-nginx) doit être configuré pour servir le challenge ACME de Let's Encrypt.

Ajoutez cette configuration dans votre fichier Nginx :

```nginx
# Dans votre configuration Nginx pour ben-djibril
server {
    listen 80;
    server_name votre-domaine.com www.votre-domaine.com;

    # Challenge ACME pour Let's Encrypt
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Redirection vers HTTPS (une fois le certificat obtenu)
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl http2;
    server_name votre-domaine.com www.votre-domaine.com;

    # Certificats SSL
    ssl_certificate /etc/letsencrypt/live/votre-domaine.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/votre-domaine.com/privkey.pem;

    # Configuration SSL recommandée
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Headers de sécurité
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy vers ben-djibril-site
    location / {
        proxy_pass http://ben-djibril-site:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Étape 4: Monter les volumes dans Nginx

Assurez-vous que votre conteneur Nginx monte les volumes nécessaires :

```yaml
services:
  nginx:
    image: votre-image-nginx
    volumes:
      - ~/certbot/conf:/etc/letsencrypt:ro
      - ~/certbot/www:/var/www/certbot:ro
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    networks:
      - kobecorp-network
```

### Étape 5: Obtenir le certificat initial

1. **Démarrer Nginx** (sans SSL pour le moment) :
```bash
cd ~/blogpress/setup-front  # ou le chemin de votre nginx
docker-compose up -d nginx
```

2. **Obtenir le certificat** :
```bash
cd ~/certbot
docker-compose run --rm certbot
```

Si tout se passe bien, vous devriez voir :
```
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/votre-domaine.com/fullchain.pem
```

### Étape 6: Configurer le renouvellement automatique

Créez un script de renouvellement `~/certbot/renew.sh` :

```bash
#!/bin/bash

# Script de renouvellement des certificats SSL

cd ~/certbot

# Renouveler les certificats
docker-compose run --rm certbot renew

# Recharger Nginx pour appliquer les nouveaux certificats
docker exec blogpress-nginx nginx -s reload || docker exec ben-djibril-nginx nginx -s reload || echo "⚠️ Conteneur Nginx non trouvé"
```

Rendez-le exécutable :
```bash
chmod +x ~/certbot/renew.sh
```

### Étape 7: Configurer un cron job pour le renouvellement

Ajoutez une tâche cron pour renouveler automatiquement les certificats :

```bash
crontab -e
```

Ajoutez cette ligne (renouvelle tous les jours à 3h du matin) :
```
0 3 * * * /home/votre-utilisateur/certbot/renew.sh >> /var/log/certbot-renew.log 2>&1
```

Ou pour tester immédiatement :
```
*/30 * * * * /home/votre-utilisateur/certbot/renew.sh >> /var/log/certbot-renew.log 2>&1
```

## 🔧 Configuration Alternative: Certbot en mode Standalone

Si vous ne pouvez pas utiliser le mode webroot, utilisez le mode standalone :

### 1. Arrêter temporairement Nginx

```bash
docker stop blogpress-nginx  # ou ben-djibril-nginx
```

### 2. Obtenir le certificat en mode standalone

```bash
cd ~/certbot
docker-compose run --rm --service-ports certbot certonly --standalone -d votre-domaine.com -d www.votre-domaine.com
```

### 3. Redémarrer Nginx

```bash
docker start blogpress-nginx  # ou ben-djibril-nginx
```

## 📝 Vérification

### Vérifier que le certificat est valide

```bash
# Vérifier les certificats
docker exec ben-djibril-certbot certbot certificates

# Tester la connexion SSL
openssl s_client -connect votre-domaine.com:443 -servername votre-domaine.com
```

### Tester le renouvellement

```bash
# Tester le renouvellement (dry-run)
cd ~/certbot
docker-compose run --rm certbot renew --dry-run
```

## 🐛 Dépannage

### Erreur: "Failed to obtain certificate"

**Causes possibles:**
- Le domaine ne pointe pas vers le serveur
- Les ports 80/443 sont bloqués
- Nginx n'est pas configuré pour servir le challenge ACME

**Solution:**
```bash
# Vérifier que le domaine pointe vers le serveur
dig votre-domaine.com

# Vérifier que les ports sont ouverts
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### Erreur: "Too many certificates already issued"

Let's Encrypt limite à 5 certificats par semaine par domaine.

**Solution:** Attendre quelques jours ou utiliser un sous-domaine différent.

### Le certificat expire bientôt

**Vérifier la date d'expiration:**
```bash
docker exec ben-djibril-certbot certbot certificates
```

**Forcer le renouvellement:**
```bash
cd ~/certbot
docker-compose run --rm certbot renew --force-renewal
```

## 🔐 Bonnes Pratiques

1. **Renouvellement automatique**: Configurez toujours un cron job pour le renouvellement
2. **Sauvegarde**: Sauvegardez régulièrement `~/certbot/conf/`
3. **Monitoring**: Surveillez les logs de renouvellement
4. **Email**: Utilisez une adresse email valide pour recevoir les notifications d'expiration
5. **Sécurité**: Ne partagez jamais vos clés privées

## 📚 Ressources

- [Documentation Certbot](https://certbot.eff.org/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [SSL Labs SSL Test](https://www.ssllabs.com/ssltest/) - Pour tester votre configuration SSL

## ✅ Checklist de Configuration

- [ ] Nom de domaine pointant vers le VPS
- [ ] Ports 80 et 443 ouverts
- [ ] Structure de dossiers certbot créée
- [ ] docker-compose.yml pour Certbot configuré
- [ ] Nginx configuré pour le challenge ACME
- [ ] Certificat initial obtenu
- [ ] Script de renouvellement créé
- [ ] Cron job configuré
- [ ] Test de renouvellement réussi
- [ ] HTTPS fonctionnel sur le site

---

**Note:** Ce guide suppose que vous utilisez le même conteneur Nginx (blogpress-nginx) pour gérer plusieurs applications. Si vous avez un conteneur Nginx dédié pour ben-djibril, adaptez les noms de conteneurs en conséquence.
