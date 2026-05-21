
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
