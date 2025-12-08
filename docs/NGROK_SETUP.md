# Configuration Ngrok

Ce guide explique comment configurer et utiliser ngrok pour partager votre application en développement.

## 📋 Prérequis

1. **Installer ngrok** : Téléchargez ngrok depuis [https://ngrok.com/download](https://ngrok.com/download) ou installez-le via npm :
   ```bash
   npm install -g ngrok
   ```

2. **Obtenir un token d'authentification** :
   - Créez un compte sur [https://dashboard.ngrok.com](https://dashboard.ngrok.com)
   - Récupérez votre authtoken depuis [https://dashboard.ngrok.com/get-started/your-authtoken](https://dashboard.ngrok.com/get-started/your-authtoken)
   - Ajoutez-le dans le fichier `ngrok.yml` à la ligne `authtoken:`

## 🚀 Utilisation

### Option 1 : Lancer ngrok séparément

1. Démarrez votre application en mode développement :
   ```bash
   npm run dev
   ```

2. Dans un autre terminal, lancez ngrok :
   ```bash
   npm run ngrok
   ```
   ou directement :
   ```bash
   ngrok start --config ngrok.yml web
   ```

### Option 2 : Lancer l'application et ngrok ensemble

Si vous avez installé `concurrently`, vous pouvez lancer les deux en même temps :
```bash
npm install --save-dev concurrently
npm run dev:ngrok
```

## 🔗 URL de Partage

Une fois ngrok lancé, votre application sera accessible via :
- **URL publique** : https://2a2ba9adf6ba.ngrok-free.app
- **URL locale** : http://localhost:5180

## ⚙️ Configuration

Le fichier `ngrok.yml` contient la configuration suivante :
- **Port** : 5180 (correspond au port configuré dans `vite.config.ts`)
- **Domaine** : 2a2ba9adf6ba.ngrok-free.app (votre domaine ngrok)
- **Protocole** : HTTP

### Modifier le domaine

Si vous souhaitez utiliser un autre domaine ngrok, modifiez la ligne `domain:` dans `ngrok.yml`.

### Modifier le port

Si vous changez le port dans `vite.config.ts`, n'oubliez pas de mettre à jour `addr:` dans `ngrok.yml`.

## 📝 Notes Importantes

1. **Domaine statique** : L'utilisation d'un domaine statique nécessite généralement un compte ngrok payant. Avec un compte gratuit, ngrok génère un nouveau domaine à chaque démarrage.

2. **Sécurité** : Ne partagez pas votre token ngrok publiquement. Le fichier `ngrok.yml` devrait être dans `.gitignore` si vous y mettez des informations sensibles.

3. **Limitations du plan gratuit** :
   - Domaine change à chaque redémarrage
   - Limite de connexions simultanées
   - Bande passante limitée

4. **Avertissement ngrok** : Avec le plan gratuit, ngrok affiche un avertissement sur la page. Pour le supprimer, vous devez passer à un plan payant.

## 🐛 Dépannage

### Erreur : "authtoken is required"
- Vérifiez que vous avez ajouté votre token dans `ngrok.yml`
- Ou configurez-le globalement : `ngrok config add-authtoken VOTRE_TOKEN`

### Erreur : "domain not found"
- Vérifiez que le domaine appartient à votre compte ngrok
- Avec un compte gratuit, supprimez la ligne `domain:` pour utiliser un domaine dynamique

### Le tunnel ne fonctionne pas
- Vérifiez que l'application est bien lancée sur le port 5180
- Vérifiez que le port n'est pas déjà utilisé par un autre processus

## 📚 Ressources

- [Documentation ngrok](https://ngrok.com/docs)
- [Dashboard ngrok](https://dashboard.ngrok.com)
- [Guide de démarrage ngrok](https://ngrok.com/docs/getting-started)

