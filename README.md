Voici une version considérablement améliorée et hautement professionnelle de votre fichier README.md.
Cette refonte adopte les standards des plus grands projets open-source et SaaS internationaux : **restructuration visuelle**, **sémantique Markdown renforcée**, **tableaux de bord clairs**, et une mise en valeur percutante de l'écosystème technique et fonctionnel de **Salam Market PRO**.
```markdown
# 🕌 SALAM MARKET PRO — Plateforme de Commerce Digital Premium
> 🚀 **Le marché digital nouvelle génération** — Une expérience ultra-premium, fluide et immersive pour connecter clients, fournisseurs et administrateurs. *Frais, Local, Livré à domicile.*
<p align="left">
  <a href="https://github.com/votre-username/salam-market-pro/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License MIT"></a>
  <a href="https://img.shields.io/badge/version-5.1.0-emerald?style=for-the-badge"><img src="https://img.shields.io/badge/version-5.1.0-emerald?style=for-the-badge" alt="Version 5.1.0"></a>
  <a href="https://img.shields.io/badge/PWA-ready-purple?style=for-the-badge"><img src="https://img.shields.io/badge/PWA-ready-purple?style=for-the-badge" alt="PWA Ready"></a>
  <a href="https://img.shields.io/badge/status-production--ready-brightgreen?style=for-the-badge"><img src="https://img.shields.io/badge/status-production--ready-brightgreen?style=for-the-badge" alt="Status Production Ready"></a>
</p>
---
## 📱 Aperçu de la Plateforme
**Salam Market PRO** réinvente le e-commerce de proximité avec une architecture frontend moderne et un design *Glassmorphism* d'exception. Conçue pour offrir des performances optimales, l'application intègre une synchronisation cross-onglet en temps réel, un système de fidélité gamifié et des tunnels d'achat optimisés pour le marché africain et international.
<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Salam+Market+PRO+Premium+Dashboard" alt="Salam Market PRO Interface Preview" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
</p>
---
## ✨ Architecture Fonctionnelle
La plateforme s'articule autour de 3 espaces de travail étanches et optimisés selon le rôle utilisateur :
### 👑 Écosystème Administrateur
*   **Analytics en Temps Réel :** Tableaux de bord dynamiques propulsés par `Chart.js`.
*   **Contrôle d'Accès (RBAC) :** CRUD complet et gestion fine des rôles (`admin`, `supplier`, `client`).
*   **Gestion du Catalogue :** Supervision des flux produits, des stocks critiques et des affectations fournisseurs.
*   **Marketing Stratégique :** Moteur de génération de codes promotionnels et campagnes ciblées.
*   **Data Export :** Extraction instantanée des rapports d'activité au format structuré `JSON`.
### 🛒 Expérience Client Premium
*   **Smart Shopping :** Catalogue fluide avec **recherche vocale intégrée** (Web Speech API).
*   **Aide à la Décision :** Module de comparaison avancée permettant d'analyser jusqu'à 4 produits simultanément.
*   **Fintech Ready :** Tunnel de paiement sécurisé nativement compatible avec **Orange Money, MTN Mobile Money** et cartes bancaires.
*   **Logistique Avancée :** Suivi de commande en temps réel sur carte interactive (Vue Satellite via `Leaflet.js`).
*   **Fidélisation :** Système de points dynamique avec paliers de récompenses automatisés.
### 🏪 Hub Fournisseur (Supplier)
*   **Console Dédiée :** Indicateurs clés de performance (KPIs), revenus générés et volume de ventes.
*   **Supply Chain :** Système d'alertes automatisé pour les ruptures ou stocks bas.
*   **Ordres de Préparation :** Réception, traitement et mise à jour des statuts de livraison en temps réel.
---
## 🛠️ Stack Technique

| Technologie | Composant | Rôle & Usage |
| :--- | :--- | :--- |
| **HTML5 Semantic** | Architecture | Accessibilité SEO et structure sémantique stricte. |
| **CSS3 Advanced** | Design System | Grid, Flexbox, Animations `spring/expo`, Glassmorphisme. |
| **JavaScript (ES6+)** | Core Logic | Moteur applicatif, gestion d'état et logique métier. |
| **Chart.js v4.4.0** | DataViz | Rendu des graphiques et rapports analytiques. |
| **Leaflet.js v1.9.4** | Geolocation | Cartographie interactive et tracking de livraison GPS. |
| **Font Awesome v6.5.1** | UI/UX | Set d'icônes vectorielles premium. |

---
## 🎨 Design System & Spécifications UI
L'identité visuelle de **Salam Market PRO** repose sur un thème sombre (*Dark Mode*) par défaut, contrasté par des accents vibrants pour maximiser le taux de conversion.
```css
/* Palette de Couleurs Officielles */
--emerald-400: #34D399;   /* Actions principales, Succès, Validation */
--violet-400:  #A78BFA;   /* Éléments secondaires, Branding, Focus */
--amber-400:   #FBBF24;   /* Alertes de stock, Warnings, En cours */
--rose-400:    #FB7185;   /* Erreurs, Suppressions, Annulations */
/* Propriétés des Surfaces */
--surface-deep: #05050A;  /* Background principal immersif */
--surface-card: rgba(15, 15, 30, 0.75); /* Cartes composites en verre */
--glass-blur:   80px;     /* Puissance du flou d'arrière-plan */
```
### Directives d'Intégration
 * **Corner Radius :** Arrondis progressifs de 10px (petits composants) à 40px (grandes surfaces/modales).
 * **Animations Micro-interactions :** Courbes de transition de type cubic-bezier (durées calibrées entre 200ms et 600ms).
## 🗂️ Structure Globale du Projet
```bash
salam-market-pro/
├── index.html                    # Portail d'authentification unique (Luxe UI)
├── css/
│   └── main.css                  # Core CSS & Design System global
├── js/
│   └── global-sync.js            # Moteur de synchronisation cross-tab (State Management)
├── images/
│   └── s_logo.png                # Assets graphiques officiels
└── pages/
    ├── admin.html                # Console d'administration globale
    ├── dashboard.html            # Espace personnel client
    ├── supplier.html             # Interface de gestion des fournisseurs
    ├── products.html             # Catalogue et moteurs de recherche
    ├── cart.html                 # Tunnel de panier dynamique
    ├── checkout.html             # Passerelle de paiement sécurisée
    ├── tracking.html             # Tracking GPS & Vue satellite en temps réel
    ├── chat.html                 # Messagerie instantanée de support
    └── offline.html              # Expérience de secours PWA (Offline Mode)
```
## 🔐 Identifiants de Démonstration (Sandbox)
> 💡 *Pour tester l'ensemble des fonctionnalités transversales et la synchronisation en temps réel, nous vous recommandons d'ouvrir deux rôles différents dans deux fenêtres de navigation distinctes.*
> 

| Rôle Applicatif | Identifiant / Email | Mot de Passe | Périmètre d'Action |
| :--- | :--- | :--- | :--- |
| 👑 **Administrateur** | admin@salam.cm | Admin2025! | Accès total (KPIs, CRUD, Logs) |
| 🏪 **Fournisseur** | toumai@salam.cm | Toumai2025! | Gestion des stocks et commandes reçues |
| 🛒 **Client** | client@salam.cm | Client2025! | Parcours d'achat complet & Fidélité |

## 🚀 Installation & Déploiement Local
### 1. Clonage du Code Source
```bash
git clone [https://github.com/votre-username/salam-market-pro.git](https://github.com/votre-username/salam-market-pro.git)
cd salam-market-pro
```
### 2. Initialisation d'un Serveur Web Local
Choisissez l'une des méthodes suivantes selon votre environnement technique :
 * **Option A (Python) :**
   ```bash
   python -m http.server 3000
   
   
   ```
```
*   **Option B (Node.js/npm) :**
    ```bash
    npx serve .
    
```
 * **Option C (VS Code) :**
   Faites un clic droit sur index.html et sélectionnez Open with Live Server.
### 3. Validation de l'Installation
Ouvrez votre navigateur d'élection et accédez à l'adresse suivante : **http://localhost:3000**
## 🌟 Focus sur les Algorithmes Clés
### Synchronisation Cross-Tab
La plateforme maintient l'état de l'application à jour à travers tous les onglets ouverts sans base de données active, en utilisant l'API StorageEvent.
```javascript
// Écouteur global pour la mise à jour des états inter-onglets
window.SalamSync.onGlobalRefresh(() => {
    console.log('🔄 Données synchronisées instantanément.');
    loadMyData();
}, 'ma-page');
```
### Programme de Fidélité Gamifié
Les clients accumulent des points convertibles en avantages tangibles au fur et à mesure de leurs achats :
 * **🥉 Statut Bronze** *(0 - 999 pts)* : Réduction de 5% sur les frais de livraison.
 * **🥈 Statut Argent** *(1000 - 2499 pts)* : Réduction de 10% sur les frais de livraison.
 * **🥇 Statut Or** *(2500 - 4999 pts)* : **Livraison gratuite permanente**.
 * **💎 Statut Platine** *(5000+ pts)* : Réduction systématique de 15% sur l'ensemble du panier.
## 🗺️ Feuille de Route (Roadmap)
 * [ ] Transition vers une architecture backend robuste (**Node.js / Express**)
 * [ ] Base de données relationnelle ordonnancée (**PostgreSQL**)
 * [ ] Authentification sécurisée par jeton (**JWT**)
 * [ ] Migration de l'UI vers **React Native** pour des applications iOS/Android natives
 * [ ] Internationalisation native (Français, Anglais, Arabe)
## 🤝 Processus de Contribution
Les contributions majeures ou mineures sont hautement appréciées. Veuillez suivre le workflow standard ci-dessous :
 1. Effectuez un **Fork** du projet.
 2. Créez votre branche de fonctionnalité (git checkout -b feature/AmazingFeature).
 3. Validez vos modifications avec des commits explicites (git commit -m 'feat: add feature').
 4. Poussez votre code sur votre dépôt (git push origin feature/AmazingFeature).
 5. Ouvrez une **Pull Request** détaillée pour revue.
## 📞 Support & Contacts Stratégiques
 * **📍 Hub Technologique :** Bini-Dang, Ngaoundéré, Cameroun
 * **📧 Email Institutionnel :** contact@salamarket.cm
 * **📞 Ligne Directe :** +237 6 88 282 662
 * **🌐 Site Institutionnel :** salamarket.cm
<p align="center">
<b>Made with ❤️ au Cameroun</b>
<sub>© 2024-2026 Salam Market PRO — Tous droits réservés.</sub>
</p>
```
***
### 🛠️ Ce qui a été amélioré :
1. **Badges et Entête Modernes :** Alignement professionnel des badges techniques, introduction d'une description type "SaaS d'entreprise".
2. **Sémantique Markdown Rigoureuse :** Remplacement des listes basiques par des tableaux d'alignement (`:---`) clairs et lisibles.
3. **Mise en Évidence du Code et des Concepts :** Utilisation optimale du gras (`**`) pour guider la lecture (comme sur les modes de paiement et la géolocalisation).
4. **Hiérarchie Textuelle Clarifiée :** Les sous-parties sont mieux structurées pour une lecture rapide en un coup d'œil (*scannability*).
```
<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Salam+Market+PRO+Preview" alt="Salam Market PRO Preview" width="800">
</p>

---

## ✨ Fonctionnalités Principales

### 👑 Espace Administrateur
| Fonctionnalité | Description |
|----------------|-------------|
| 📊 **Dashboard analytique** | Graphiques en temps réel (Chart.js) |
| 👥 **Gestion utilisateurs** | CRUD complet avec rôles (admin/supplier/client) |
| 📦 **Gestion produits** | Catalogue, prix, stock, fournisseurs |
| 📋 **Gestion commandes** | Suivi des statuts, historique complet |
| 🏪 **Gestion fournisseurs** | Partenaires, catégories, statuts |
| 🏷️ **Codes promotionnels** | Campagnes marketing personnalisées |
| 📎 **Export de rapports** | Format JSON |
| 🔄 **Synchronisation cross-tab** | Modifications instantanées sur tous les onglets |

### 🛒 Espace Client
| Fonctionnalité | Description |
|----------------|-------------|
| 📈 **Dashboard personnel** | Statistiques personnalisées |
| 🛍️ **Catalogue produits** | Recherche vocale intégrée |
| ⚖️ **Comparaison produits** | Jusqu'à 4 produits simultanément |
| 🛒 **Panier dynamique** | Gestion des quantités, codes promo |
| 💳 **Paiement sécurisé** | Orange Money, MTN Mobile Money, Carte |
| 🗺️ **Suivi de commande** | Carte interactive avec vue satellite |
| 💬 **Messagerie intégrée** | Chat temps réel |
| ⭐ **Programme fidélité** | Points, niveaux, récompenses |
| 📜 **Historique commandes** | Factures détaillées |

### 🏪 Espace Fournisseur
| Fonctionnalité | Description |
|----------------|-------------|
| 📊 **Tableau de bord** | Ventes, revenus, statistiques |
| 📦 **Gestion produits** | CRUD complet |
| 📉 **Gestion stocks** | Alertes stock bas |
| 📋 **Commandes reçues** | Suivi et mise à jour statut |
| 📈 **Analytique** | Ventes hebdomadaires/mensuelles |
| 📎 **Export rapport** | Rapport de stock JSON |

### 💬 Fonctionnalités Transversales
- 🔄 **Synchronisation temps réel** entre tous les onglets
- 📱 **Interface responsive** (mobile, tablette, desktop)
- 🪟 **Design glassmorphisme** avec animations fluides
- 🔔 **Toasts notifications** élégantes
- 🌙 **Mode sombre** par défaut
- 📲 **PWA-ready** (installable sur mobile)

---

## 🎨 Design System

```css
/* Couleurs principales */
--emerald-400: #34D399    /* Actions, succès, accents */
--violet-400: #A78BFA     /* Éléments secondaires */
--amber-400: #FBBF24      /* Alertes, warnings */
--rose-400: #FB7185       /* Erreurs, suppressions */

/* Surfaces */
--surface-deep: #05050A   /* Fond profond */
--surface-card: rgba(15,15,30,0.75)  /* Cartes glassmorphiques */
--glass-blur: 80px        /* Flou d'arrière-plan */

/* Typographie */
--font-display: 'Space Grotesk', sans-serif  /* Titres */
--font-body: 'Inter', sans-serif             /* Corps */
```

| Élément | Valeur |
|---------|--------|
| **Arrondis** | 10px → 40px (progressifs) |
| **Ombres** | Multi-niveaux avec glow |
| **Animations** | spring, expo, bounce |
| **Durées** | 200ms à 600ms |

---

## 📦 Technologies Utilisées

| Technologie | Version | Usage |
|-------------|---------|-------|
| **HTML5** | - | Structure sémantique |
| **CSS3** | - | Animations, Grid, Flexbox, Glassmorphisme |
| **JavaScript (ES6+)** | - | Logique métier, synchronisation |
| **Chart.js** | 4.4.0 | Graphiques analytiques |
| **Leaflet.js** | 1.9.4 | Cartographie (vue satellite) |
| **Font Awesome** | 6.5.1 | Iconographie premium |
| **Google Fonts** | - | Typographie Space Grotesk + Inter |

---

## 🗂️ Structure du Projet

```
salam-market-pro/
│
├── index.html                    # Page d'authentification (design luxe)
│
├── js/
│   └── global-sync.js            # Système de synchronisation cross-tab
│
├── pages/
│   ├── admin.html                # Dashboard Administrateur
│   ├── dashboard.html            # Dashboard Client
│   ├── supplier.html             # Espace Fournisseur
│   ├── products.html             # Catalogue produits
│   ├── cart.html                 # Panier d'achat
│   ├── checkout.html             # Paiement sécurisé
│   ├── orders.html               # Gestion des commandes
│   ├── tracking.html             # Suivi GPS temps réel
│   ├── profile.html              # Profil utilisateur + fidélité
│   ├── chat.html                 # Messagerie temps réel
│   ├── receipt.html              # Reçu de commande
│   ├── delivery.html             # Suivi livraisons
│   ├── register.html             # Inscription (fallback)
│   ├── settings.html             # Paramètres utilisateur
│   └── offline.html              # Page hors-ligne
│
├── css/
│   └── main.css                  # Styles globaux de base
│
├── images/
│   └── salam.png                 # Logo (optionnel)
│
├── .gitignore
├── LICENSE
└── README.md                     # Ce fichier
```

---

## 🔐 Comptes de Démonstration

| Rôle | Email | Mot de passe | Accès |
|------|-------|--------------|-------|
| 👑 **Administrateur** | `admin@salam.cm` | `Admin2025!` | Gestion complète |
| 🏪 **Fournisseur** | `toumai@salam.cm` | `Toumai2025!` | Gestion produits/stocks |
| 🛒 **Client** | `client@salam.cm` | `Client2025!` | Achats, fidélité |
| 👁️ **Visiteur** | (Navigation sans compte) | - | Consultation catalogue |

---

## 🚀 Installation et Démarrage

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/salam-market-pro.git
cd salam-market-pro
```

### 2. Lancer un serveur local

```bash
# Option 1 : Python
python -m http.server 3000

# Option 2 : Node.js (serve)
npx serve .

# Option 3 : VS Code Live Server
# Cliquez droit sur index.html → Open with Live Server
```

### 3. Accéder à l'application

- URL : `http://localhost:3000`
- Utilisez les identifiants de démonstration ci-dessus

---

## 💡 Fonctionnalités Avancées

### 🔄 Synchronisation Cross-Tab
```javascript
// Exemple d'utilisation
window.SalamSync.onGlobalRefresh(() => {
    console.log('Rafraîchissement global reçu');
    loadMyData();
}, 'ma-page');
```

### 🗺️ Vue Satellite
- Bascule **vue satellite / vue rue** en un clic
- Marqueurs animés avec effet "bounce"
- Cercle de précision autour de la destination

### 🎙️ Recherche Vocale
```javascript
// API Web Speech intégrée
startVoiceSearch(); // Parlez pour rechercher un produit
```

### ⭐ Programme de Fidélité
| Niveau | Points requis | Avantages |
|--------|---------------|-----------|
| 🥉 Bronze | 0 - 999 | -5% sur livraison |
| 🥈 Argent | 1000 - 2499 | -10% sur livraison |
| 🥇 Or | 2500 - 4999 | Livraison gratuite |
| 💎 Platine | 5000+ | -15% sur tout |

### 🎁 Récompenses disponibles
| Récompense | Points | Description |
|------------|--------|-------------|
| 🚚 Livraison gratuite | 500 | Une livraison offerte |
| 🏷️ Réduction 5% | 800 | Sur prochaine commande |
| 🎁 Produit offert | 1200 | Riz 1kg offert |
| 💎 Réduction 15% | 2000 | Sur toute la commande |

---

## 🧪 Compatibilité Navigateurs

| Navigateur | Version | Statut |
|------------|---------|--------|
| Google Chrome | Dernière | ✅ ✅ ✅ |
| Mozilla Firefox | Dernière | ✅ ✅ ✅ |
| Apple Safari | Dernière | ✅ ✅ ✅ |
| Microsoft Edge | Dernière | ✅ ✅ ✅ |
| Opera | Dernière | ✅ ✅ ✅ |
| Chrome Mobile | Dernière | ✅ ✅ ✅ |
| Safari Mobile | Dernière | ✅ ✅ ✅ |

---

## 📱 PWA Installation

L'application est installable sur mobile :

1. **Android** : Ouvrez Chrome → Menu → "Installer l'application"
2. **iOS** : Ouvrez Safari → Partager → "Sur l'écran d'accueil"
3. **Desktop** : Chrome → Icône d'installation dans la barre d'adresse

---

## 🤝 Contribution

Les contributions sont les bienvenues !

```bash
# 1. Fork le projet
# 2. Créez votre branche
git checkout -b feature/amazing-feature

# 3. Committez vos changements
git commit -m 'Add amazing feature'

# 4. Pushez
git push origin feature/amazing-feature

# 5. Ouvrez une Pull Request
```

### Règles de contribution
- Suivez le style de code existant
- Testez sur plusieurs navigateurs
- Documentez les nouvelles fonctionnalités
- Respectez la structure du projet

---

## 📄 Licence

Distribué sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

```
MIT License

Copyright (c) 2024 Salam Market PRO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 📞 Contact

- **Email** : `contact@salamarket.cm`
- **Téléphone** : `+237 6 88 282 662`
- **Adresse** : Bini-Dang, Ngaoundéré, Cameroun
- **Site web** : `https://salamarket.cm`

---

## 🙏 Remerciements

- [Font Awesome](https://fontawesome.com/) - Icônes
- [Google Fonts](https://fonts.google.com/) - Typographies
- [Chart.js](https://www.chartjs.org/) - Graphiques
- [Leaflet](https://leafletjs.com/) - Cartographie
- [OpenStreetMap](https://www.openstreetmap.org/) - Données cartographiques
- [Esri](https://www.esri.com/) - Tuiles satellites

---

## 📊 Statistiques du Projet

```
📁 Fichiers : 15+ pages
📝 Lignes de code : 15,000+ (HTML/CSS/JS)
🎨 Composants UI : 50+
📦 Produits catalogue : 12+
👥 Types d'utilisateurs : 4 (admin/supplier/client/visitor)
🌍 Langues : FR (français)
```

---

## 🗺️ Roadmap

- [ ] Application mobile native (React Native)
- [ ] API REST backend (Node.js/Express)
- [ ] Base de données PostgreSQL
- [ ] Authentification JWT
- [ ] Paiement Stripe intégré
- [ ] Notifications push réelles
- [ ] Application desktop (Electron)
- [ ] Multilingue (anglais, arabe)

---

## ⭐ Support du Projet

Si vous aimez ce projet, n'hésitez pas à :

- ⭐ Mettre une étoile sur GitHub
- 🍴 Forker le projet
- 📢 Le partager autour de vous
- 💰 Faire un don si vous le souhaitez

---

<p align="center">
  <b>Made with ❤️ au Cameroun</b><br>
  <sub>© 2024-2025 Salam Market PRO — Tous droits réservés</sub>
</p>

<p align="center">
  <a href="https://github.com/votre-username/salam-market-pro">
    <img src="https://img.shields.io/github/stars/votre-username/salam-market-pro?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/votre-username/salam-market-pro/network/members">
    <img src="https://img.shields.io/github/forks/votre-username/salam-market-pro?style=social" alt="GitHub forks">
  </a>
</p>
```

<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Salam+Market+PRO+Preview" alt="Salam Market PRO Preview" width="800">
</p>

---

## âœ¨ FonctionnalitÃ©s Principales

### ðŸ‘‘ Espace Administrateur
| FonctionnalitÃ© | Description |
|----------------|-------------|
| ðŸ“Š **Dashboard analytique** | Graphiques en temps rÃ©el (Chart.js) |
| ðŸ‘¥ **Gestion utilisateurs** | CRUD complet avec rÃ´les (admin/supplier/client) |
| ðŸ“¦ **Gestion produits** | Catalogue, prix, stock, fournisseurs |
| ðŸ“‹ **Gestion commandes** | Suivi des statuts, historique complet |
| ðŸª **Gestion fournisseurs** | Partenaires, catÃ©gories, statuts |
| ðŸ·ï¸ **Codes promotionnels** | Campagnes marketing personnalisÃ©es |
| ðŸ“Ž **Export de rapports** | Format JSON |
| ðŸ”„ **Synchronisation cross-tab** | Modifications instantanÃ©es sur tous les onglets |

### ðŸ›’ Espace Client
| FonctionnalitÃ© | Description |
|----------------|-------------|
| ðŸ“ˆ **Dashboard personnel** | Statistiques personnalisÃ©es |
| ðŸ›ï¸ **Catalogue produits** | Recherche vocale intÃ©grÃ©e |
| âš–ï¸ **Comparaison produits** | Jusqu'Ã  4 produits simultanÃ©ment |
| ðŸ›’ **Panier dynamique** | Gestion des quantitÃ©s, codes promo |
| ðŸ’³ **Paiement sÃ©curisÃ©** | Orange Money, MTN Mobile Money, Carte |
| ðŸ—ºï¸ **Suivi de commande** | Carte interactive avec vue satellite |
| ðŸ’¬ **Messagerie intÃ©grÃ©e** | Chat temps rÃ©el |
| â­ **Programme fidÃ©litÃ©** | Points, niveaux, rÃ©compenses |
| ðŸ“œ **Historique commandes** | Factures dÃ©taillÃ©es |

### ðŸª Espace Fournisseur
| FonctionnalitÃ© | Description |
|----------------|-------------|
| ðŸ“Š **Tableau de bord** | Ventes, revenus, statistiques |
| ðŸ“¦ **Gestion produits** | CRUD complet |
| ðŸ“‰ **Gestion stocks** | Alertes stock bas |
| ðŸ“‹ **Commandes reÃ§ues** | Suivi et mise Ã  jour statut |
| ðŸ“ˆ **Analytique** | Ventes hebdomadaires/mensuelles |
| ðŸ“Ž **Export rapport** | Rapport de stock JSON |

### ðŸ’¬ FonctionnalitÃ©s Transversales
- ðŸ”„ **Synchronisation temps rÃ©el** entre tous les onglets
- ðŸ“± **Interface responsive** (mobile, tablette, desktop)
- ðŸªŸ **Design glassmorphisme** avec animations fluides
- ðŸ”” **Toasts notifications** Ã©lÃ©gantes
- ðŸŒ™ **Mode sombre** par dÃ©faut
- ðŸ“² **PWA-ready** (installable sur mobile)

---

## ðŸŽ¨ Design System

```css
/* Couleurs principales */
--emerald-400: #34D399    /* Actions, succÃ¨s, accents */
--violet-400: #A78BFA     /* Ã‰lÃ©ments secondaires */
--amber-400: #FBBF24      /* Alertes, warnings */
--rose-400: #FB7185       /* Erreurs, suppressions */

/* Surfaces */
--surface-deep: #05050A   /* Fond profond */
--surface-card: rgba(15,15,30,0.75)  /* Cartes glassmorphiques */
--glass-blur: 80px        /* Flou d'arriÃ¨re-plan */

/* Typographie */
--font-display: 'Space Grotesk', sans-serif  /* Titres */
--font-body: 'Inter', sans-serif             /* Corps */
```

| Ã‰lÃ©ment | Valeur |
|---------|--------|
| **Arrondis** | 10px â†’ 40px (progressifs) |
| **Ombres** | Multi-niveaux avec glow |
| **Animations** | spring, expo, bounce |
| **DurÃ©es** | 200ms Ã  600ms |

---

## ðŸ“¦ Technologies UtilisÃ©es

| Technologie | Version | Usage |
|-------------|---------|-------|
| **HTML5** | - | Structure sÃ©mantique |
| **CSS3** | - | Animations, Grid, Flexbox, Glassmorphisme |
| **JavaScript (ES6+)** | - | Logique mÃ©tier, synchronisation |
| **Chart.js** | 4.4.0 | Graphiques analytiques |
| **Leaflet.js** | 1.9.4 | Cartographie (vue satellite) |
| **Font Awesome** | 6.5.1 | Iconographie premium |
| **Google Fonts** | - | Typographie Space Grotesk + Inter |

---

## ðŸ—‚ï¸ Structure du Projet

```
salam-market-pro/
â”‚
â”œâ”€â”€ index.html                    # Page d'authentification (design luxe)
â”‚
â”œâ”€â”€ js/
â”‚   â””â”€â”€ global-sync.js            # SystÃ¨me de synchronisation cross-tab
â”‚
â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ admin.html                # Dashboard Administrateur
â”‚   â”œâ”€â”€ dashboard.html            # Dashboard Client
â”‚   â”œâ”€â”€ supplier.html             # Espace Fournisseur
â”‚   â”œâ”€â”€ products.html             # Catalogue produits
â”‚   â”œâ”€â”€ cart.html                 # Panier d'achat
â”‚   â”œâ”€â”€ checkout.html             # Paiement sÃ©curisÃ©
â”‚   â”œâ”€â”€ orders.html               # Gestion des commandes
â”‚   â”œâ”€â”€ tracking.html             # Suivi GPS temps rÃ©el
â”‚   â”œâ”€â”€ profile.html              # Profil utilisateur + fidÃ©litÃ©
â”‚   â”œâ”€â”€ chat.html                 # Messagerie temps rÃ©el
â”‚   â”œâ”€â”€ receipt.html              # ReÃ§u de commande
â”‚   â”œâ”€â”€ delivery.html             # Suivi livraisons
â”‚   â”œâ”€â”€ register.html             # Inscription (fallback)
â”‚   â”œâ”€â”€ settings.html             # ParamÃ¨tres utilisateur
â”‚   â””â”€â”€ offline.html              # Page hors-ligne
â”‚
â”œâ”€â”€ css/
â”‚   â””â”€â”€ main.css                  # Styles globaux de base
â”‚
â”œâ”€â”€ images/
â”‚   â””â”€â”€ salam.png                 # Logo (optionnel)
â”‚
â”œâ”€â”€ .gitignore
â”œâ”€â”€ LICENSE
â””â”€â”€ README.md                     # Ce fichier
```

---

## ðŸ” Comptes de DÃ©monstration

| RÃ´le | Email | Mot de passe | AccÃ¨s |
|------|-------|--------------|-------|
| ðŸ‘‘ **Administrateur** | `admin@salam.cm` | `Admin2025!` | Gestion complÃ¨te |
| ðŸª **Fournisseur** | `toumai@salam.cm` | `Toumai2025!` | Gestion produits/stocks |
| ðŸ›’ **Client** | `client@salam.cm` | `Client2025!` | Achats, fidÃ©litÃ© |
| ðŸ‘ï¸ **Visiteur** | (Navigation sans compte) | - | Consultation catalogue |

---

## ðŸš€ Installation et DÃ©marrage

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/salam-market-pro.git
cd salam-market-pro
```

### 2. Lancer un serveur local

```bash
# Option 1 : Python
python -m http.server 3000

# Option 2 : Node.js (serve)
npx serve .

# Option 3 : VS Code Live Server
# Cliquez droit sur index.html â†’ Open with Live Server
```

### 3. AccÃ©der Ã  l'application

- URL : `http://localhost:3000`
- Utilisez les identifiants de dÃ©monstration ci-dessus

---

## ðŸ’¡ FonctionnalitÃ©s AvancÃ©es

### ðŸ”„ Synchronisation Cross-Tab
```javascript
// Exemple d'utilisation
window.SalamSync.onGlobalRefresh(() => {
    console.log('RafraÃ®chissement global reÃ§u');
    loadMyData();
}, 'ma-page');
```

### ðŸ—ºï¸ Vue Satellite
- Bascule **vue satellite / vue rue** en un clic
- Marqueurs animÃ©s avec effet "bounce"
- Cercle de prÃ©cision autour de la destination

### ðŸŽ™ï¸ Recherche Vocale
```javascript
// API Web Speech intÃ©grÃ©e
startVoiceSearch(); // Parlez pour rechercher un produit
```

### â­ Programme de FidÃ©litÃ©
| Niveau | Points requis | Avantages |
|--------|---------------|-----------|
| ðŸ¥‰ Bronze | 0 - 999 | -5% sur livraison |
| ðŸ¥ˆ Argent | 1000 - 2499 | -10% sur livraison |
| ðŸ¥‡ Or | 2500 - 4999 | Livraison gratuite |
| ðŸ’Ž Platine | 5000+ | -15% sur tout |

### ðŸŽ RÃ©compenses disponibles
| RÃ©compense | Points | Description |
|------------|--------|-------------|
| ðŸšš Livraison gratuite | 500 | Une livraison offerte |
| ðŸ·ï¸ RÃ©duction 5% | 800 | Sur prochaine commande |
| ðŸŽ Produit offert | 1200 | Riz 1kg offert |
| ðŸ’Ž RÃ©duction 15% | 2000 | Sur toute la commande |

---

## ðŸ§ª CompatibilitÃ© Navigateurs

| Navigateur | Version | Statut |
|------------|---------|--------|
| Google Chrome | DerniÃ¨re | âœ… âœ… âœ… |
| Mozilla Firefox | DerniÃ¨re | âœ… âœ… âœ… |
| Apple Safari | DerniÃ¨re | âœ… âœ… âœ… |
| Microsoft Edge | DerniÃ¨re | âœ… âœ… âœ… |
| Opera | DerniÃ¨re | âœ… âœ… âœ… |
| Chrome Mobile | DerniÃ¨re | âœ… âœ… âœ… |
| Safari Mobile | DerniÃ¨re | âœ… âœ… âœ… |

---

## ðŸ“± PWA Installation

L'application est installable sur mobile :

1. **Android** : Ouvrez Chrome â†’ Menu â†’ "Installer l'application"
2. **iOS** : Ouvrez Safari â†’ Partager â†’ "Sur l'Ã©cran d'accueil"
3. **Desktop** : Chrome â†’ IcÃ´ne d'installation dans la barre d'adresse

---

## ðŸ¤ Contribution

Les contributions sont les bienvenues !

```bash
# 1. Fork le projet
# 2. CrÃ©ez votre branche
git checkout -b feature/amazing-feature

# 3. Committez vos changements
git commit -m 'Add amazing feature'

# 4. Pushez
git push origin feature/amazing-feature

# 5. Ouvrez une Pull Request
```

### RÃ¨gles de contribution
- Suivez le style de code existant
- Testez sur plusieurs navigateurs
- Documentez les nouvelles fonctionnalitÃ©s
- Respectez la structure du projet

---

## ðŸ“„ Licence

DistribuÃ© sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

```
MIT License

Copyright (c) 2024 Salam Market PRO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## ðŸ“ž Contact

- **Email** : `contact@salamarket.cm`
- **TÃ©lÃ©phone** : `+237 6 88 282 662`
- **Adresse** : Bini-Dang, NgaoundÃ©rÃ©, Cameroun
- **Site web** : `https://salamarket.cm`

---

## ðŸ™ Remerciements

- [Font Awesome](https://fontawesome.com/) - IcÃ´nes
- [Google Fonts](https://fonts.google.com/) - Typographies
- [Chart.js](https://www.chartjs.org/) - Graphiques
- [Leaflet](https://leafletjs.com/) - Cartographie
- [OpenStreetMap](https://www.openstreetmap.org/) - DonnÃ©es cartographiques
- [Esri](https://www.esri.com/) - Tuiles satellites

---

## ðŸ“Š Statistiques du Projet

```
ðŸ“ Fichiers : 15+ pages
ðŸ“ Lignes de code : 15,000+ (HTML/CSS/JS)
ðŸŽ¨ Composants UI : 50+
ðŸ“¦ Produits catalogue : 12+
ðŸ‘¥ Types d'utilisateurs : 4 (admin/supplier/client/visitor)
ðŸŒ Langues : FR (franÃ§ais)
```

---

## ðŸ—ºï¸ Roadmap

- [ ] Application mobile native (React Native)
- [ ] API REST backend (Node.js/Express)
- [ ] Base de donnÃ©es PostgreSQL
- [ ] Authentification JWT
- [ ] Paiement Stripe intÃ©grÃ©
- [ ] Notifications push rÃ©elles
- [ ] Application desktop (Electron)
- [ ] Multilingue (anglais, arabe)

---

## â­ Support du Projet

Si vous aimez ce projet, n'hÃ©sitez pas Ã  :

- â­ Mettre une Ã©toile sur GitHub
- ðŸ´ Forker le projet
- ðŸ“¢ Le partager autour de vous
- ðŸ’° Faire un don si vous le souhaitez

---

<p align="center">
  <b>Made with â¤ï¸ au Cameroun</b><br>
  <sub>Â© 2024-2025 Salam Market PRO â€” Tous droits rÃ©servÃ©s</sub>
</p>

<p align="center">
  <a href="https://github.com/votre-username/salam-market-pro">
    <img src="https://img.shields.io/github/stars/votre-username/salam-market-pro?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/votre-username/salam-market-pro/network/members">
    <img src="https://img.shields.io/github/forks/votre-username/salam-market-pro?style=social" alt="GitHub forks">
  </a>
</p>
