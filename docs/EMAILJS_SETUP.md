# Configuration EmailJS

Ce guide vous explique comment configurer EmailJS pour activer le formulaire de contact et la newsletter.

## 📋 Prérequis

1. Un compte EmailJS (gratuit) : https://www.emailjs.com/
2. Une adresse email (Gmail, Outlook, etc.)

## 🚀 Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Créer un service email

1. Dans le dashboard, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (ex: `service_xxxxx`)

### 3. Créer un template pour le formulaire de contact

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template avec ces variables :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{message}}` - Message

**Exemple de template :**
```
Sujet : Nouveau message de contact depuis le site

Bonjour,

Vous avez reçu un nouveau message depuis votre site web.

Nom : {{from_name}}
Email : {{from_email}}

Message :
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact.
```

4. Notez le **Template ID** (ex: `template_xxxxx`)

### 4. Créer un template pour la newsletter

1. Créez un nouveau template dans **"Email Templates"**
2. Configurez le template avec ces variables :
   - `{{email}}` - Email de l'abonné
   - `{{date}}` - Date d'abonnement
   - `{{time}}` - Heure d'abonnement

**Exemple de template :**
```
Sujet : Nouvel abonnement à la newsletter

Bonjour,

Un nouvel abonnement à votre newsletter :

Email : {{email}}
Date : {{date}} à {{time}}

---
Ce message a été envoyé depuis le formulaire d'abonnement.
```

3. Notez le **Template ID** (ex: `template_yyyyy`)

### 5. Récupérer la clé publique (Public Key)

1. Allez dans **"Account"** > **"General"**
2. Trouvez la section **"API Keys"**
3. Copiez votre **Public Key** (ex: `xxxxxxxxxxxxx`)

### 6. Configurer les variables d'environnement

1. Créez un fichier `.env` à la racine du projet (copiez `.env.example`)
2. Remplissez les variables :

```env
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=votre_template_contact_id
VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=votre_template_newsletter_id
```

### 7. Redémarrer le serveur de développement

```bash
npm run dev
```

## ✅ Vérification

1. Testez le formulaire de contact sur `/contact`
2. Testez l'abonnement à la newsletter dans le footer
3. Vérifiez que vous recevez bien les emails

## 🔧 Dépannage

### Les emails ne sont pas envoyés

1. Vérifiez que toutes les variables d'environnement sont correctement définies
2. Vérifiez la console du navigateur pour les erreurs
3. Vérifiez que votre service email est bien connecté dans EmailJS
4. Vérifiez que les noms des variables dans les templates correspondent

### Mode développement (simulation)

Si EmailJS n'est pas configuré, l'application fonctionnera en mode simulation :
- Les formulaires afficheront un message de succès
- Aucun email ne sera réellement envoyé
- Un avertissement sera affiché dans la console

## 📝 Notes importantes

- Le plan gratuit d'EmailJS permet 200 emails/mois
- Les variables d'environnement doivent commencer par `VITE_` pour être accessibles dans le code
- Ne commitez jamais votre fichier `.env` (il est déjà dans `.gitignore`)

## 🔗 Ressources

- Documentation EmailJS : https://www.emailjs.com/docs/
- Support EmailJS : https://www.emailjs.com/support/

