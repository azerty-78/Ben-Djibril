## Forfaits SaaS – Résumé fonctionnel

Ce document résume tout ce qui a été mis en place dans l’application pour les **forfaits SaaS** de la page `Services`.

---

## 1. Modèle SaaS – Vision globale

- **Principe général**
  - Le client **paie une licence mensuelle ou annuelle** pour utiliser le logiciel.
  - Tu (le développeur) gères toute la **partie technique** : hébergement, maintenance, sécurité, mises à jour.
  - La **propriété intellectuelle** (code source, architecture, etc.) reste à toi.

- **Public cible**
  - Entrepreneurs / TPE / PME qui veulent :
    - Lancer rapidement un projet.
    - Avoir un **coût mensuel maîtrisé**.
    - Ne pas gérer les serveurs, le déploiement, la sécurité, etc.

- **Propriété & droits**
  - Le client **utilise** le logiciel (mode SaaS), mais ne possède pas le code.
  - À l’arrêt de l’abonnement :
    - L’accès à l’application est **suspendu après le préavis** prévu.
    - Une **sauvegarde des données** peut être fournie selon le contrat.
    - Le code et la propriété intellectuelle restent au développeur.

- **Responsabilités**
  - **Client**
    - Définir ses besoins métier.
    - Valider les grands choix fonctionnels.
    - Fournir contenus et données.
    - Respecter les conditions d’utilisation et les échéances de paiement.
  - **Développeur**
    - Héberger et maintenir l’application.
    - Assurer la sécurité et les mises à jour.
    - Surveiller performances et disponibilité.
    - Corriger les bugs et livrer les évolutions prévues selon le forfait choisi.

---

## 2. Structure des offres SaaS

Trois forfaits, tous disponibles **au mois** avec possibilité de **paiement annuel** à tarif réduit :

1. **Good Deal** – entrée de gamme, “lancer à moindre coût”.
2. **Normal** – milieu de gamme, plus de suivi et d’évolutions.
3. **Premium** – accompagnement rapproché et optimisation proactive.

Les trois forfaits ont en commun :
- Accès au logiciel 24h/24 et 7j/7.
- Maintenance et sécurité gérées par toi.
- Possibilité de paiement annuel avec économie financière.

---

## 3. Détail des forfaits

### 3.1 Good Deal

- **Positionnement**
  - Forfait d’entrée de gamme, mis en avant dans l’UI comme **“Most popular / Le plus populaire”**.
  - Idéal pour **lancer un projet à moindre coût**.

- **Tarifs**
  - **Mensuel** : `35 000 XAF / mois`
  - **Annuel** : `300 000 XAF` au lieu de `420 000 XAF`
  - **Économie** : `120 000 XAF` par an par rapport au paiement mensuel.

- **Message clé (UI)**
  - Badge d’économie / highlight :  
    - FR : *« En payant une fois par an, vous économisez jusqu’à 120 000 XAF. »*  
    - EN : *« Pay once a year and save up to 120,000 XAF. »*

- **Fonctionnalités principales**
  - Hébergement, maintenance et sécurité inclus.
  - Corrections de bugs et petites améliorations.
  - Support par email aux jours ouvrés.
  - Accès à l’application 24/7.

- **Responsabilités spécifiques**
  - Identiques au modèle SaaS global, mais avec un niveau de service adapté à une petite structure :
    - Support standard (principalement email).
    - Évolutions fonctionnelles limitées (focus sur stabilité + corrections).

---

### 3.2 Normal

- **Positionnement**
  - Forfait milieu de gamme, pour **entreprises ayant besoin de plus de suivi**.
  - “Plus sérieux” que Good Deal, avec davantage d’évolutions incluses.

- **Tarifs**
  - **Mensuel** : `45 000 XAF / mois`
  - **Annuel** : `400 000 XAF` au lieu de `540 000 XAF`
  - **Économie** : `140 000 XAF` par an par rapport au paiement mensuel.

- **Message clé (UI)**
  - FR : *« Facturation annuelle possible avec un gain financier important. »*  
  - EN : *« Annual billing available with strong savings. »*

- **Fonctionnalités principales**
  - Tout ce qui est inclus dans **Good Deal**.
  - Jusqu’à **2 évolutions fonctionnelles par trimestre**.
  - Support prioritaire (email + WhatsApp).
  - Suivi des performances et de la disponibilité.

- **Responsabilités spécifiques**
  - Tu t’engages davantage sur :
    - Le **rythme d’évolution** (fonctionnalités planifiées).
    - Le **niveau de support** (prioritaire, canaux supplémentaires).
    - Le **monitoring** plus actif (performances, disponibilité).

---

### 3.3 Premium

- **Positionnement**
  - Forfait haut de gamme, pour les clients qui veulent **maximum de tranquillité** et un **accompagnement rapproché**.
  - Meilleure valeur long terme si payé annuellement.

- **Tarifs**
  - **Mensuel** : `55 000 XAF / mois`
  - **Annuel** : `500 000 XAF` au lieu de `660 000 XAF`
  - **Économie** : `160 000 XAF` par an par rapport au paiement mensuel.

- **Message clé (UI)**
  - FR : *« Meilleure valeur sur le long terme avec un paiement annuel. »*  
  - EN : *« Best long-term value with annual payment. »*

- **Fonctionnalités principales**
  - Tout ce qui est inclus dans **Normal**.
  - Réunion de suivi stratégique **tous les mois**.
  - Optimisation proactive des **performances** et de la **sécurité**.
  - **Reporting personnalisé** sur l’usage et les incidents.

- **Responsabilités spécifiques**
  - Tu joues un rôle de **partenaire stratégique** :
    - Proposer des améliorations en continu (techniques et parfois métier).
    - Anticiper les problèmes de performance / sécurité.
    - Fournir des **rapports réguliers** pour la direction / le client.

---

## 4. Ce que la boîte de dialogue SaaS affiche

Pour chaque forfait SaaS, la boîte de dialogue (component `ServiceDetailsDialog`) affiche :

1. **En-tête compact**
   - Type de modèle (SaaS).
   - Nom du forfait (Good Deal, Normal, Premium).
   - Prix mensuel + petit rappel de l’avantage annuel.

2. **Bloc “Comment ce forfait fonctionne concrètement”**
   - Reprise de la description courte.
   - Résumé narratif du fonctionnement au quotidien.

3. **Bloc “Facturation mensuelle ou annuelle”**
   - Montant du paiement annuel (`annualPrice`).
   - Économie réalisée (`annualSaving`).

4. **Fonctionnalités**
   - Liste des 4 points clés spécifiques à chaque forfait.

5. **Public cible & propriété**
   - *Pour qui est ce modèle ?* (audience).
   - *Propriété intellectuelle & droits* (rappel que le code reste au développeur).

6. **Responsabilités**
   - Bloc “Vos responsabilités” (client).
   - Bloc “Mes responsabilités” (développeur).

7. **Arrêt de l’abonnement**
   - Ce qui se passe si le client met fin au contrat (suspension de l’accès, sauvegarde de données, propriété qui reste au développeur).

8. **Call-to-action**
   - Bouton **Fermer**.
   - Bouton **Discuter de ce forfait** → redirection vers `/contact?plan=...`.

---

## 5. Résumé stratégique

- Les forfaits SaaS sont pensés pour :
  - Offrir une **entrée simple** (Good Deal),
  - Un **équilibre coût / qualité / suivi** (Normal),
  - Et un **accompagnement premium** (Premium).
- La **facturation annuelle** est mise en avant à la fois :
  - Directement sur la **carte du forfait** (prix annuel + économie en badge),
  - Et dans la **boîte de dialogue** (détail chiffré, explication de l’intérêt financier).
- La séparation **responsabilités client / développeur** est clairement expliquée, ce qui aide pour :
  - Clarifier les attentes dès le départ,
  - Servir éventuellement de base à un contrat plus formel.


