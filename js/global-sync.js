/**
 * ============================================================
 * SALAM MARKET PRO — Global Synchronization System v1.0
 * ============================================================
 * Ce module assure la communication entre tous les onglets/pages
 * et garantit que les modifications (admin, panier, profil) sont
 * répercutées instantanément sur l'ensemble de l'application.
 * 
 * Fonctionnalités :
 * - EventBus personnalisé pour la communication cross-tab
 * - Storage events pour la synchronisation automatique
 * - Gestion des mises à jour en temps réel
 * - Callbacks pour les actions spécifiques (refresh UI)
 * ============================================================
 */

(function() {
    'use strict';

    // ========== CONFIGURATION ==========
    const STORAGE_PREFIX = 'salam_';
    const SYNC_EVENT_KEY = STORAGE_PREFIX + 'sync_event';
    const VERSION_KEY = STORAGE_PREFIX + 'version';
    const CURRENT_VERSION = '5.0.0';

    // ========== EVENT BUS ==========
    // Pour la communication intra-page (entre composants)
    const eventListeners = new Map();

    const EventBus = {
        /**
         * Écouter un événement
         * @param {string} event - Nom de l'événement
         * @param {Function} callback - Fonction à exécuter
         * @returns {Function} - Fonction pour se désabonner
         */
        on(event, callback) {
            if (!eventListeners.has(event)) {
                eventListeners.set(event, []);
            }
            eventListeners.get(event).push(callback);
            
            // Retourner une fonction pour se désabonner
            return () => {
                const callbacks = eventListeners.get(event);
                if (callbacks) {
                    const index = callbacks.indexOf(callback);
                    if (index !== -1) callbacks.splice(index, 1);
                }
            };
        },

        /**
         * Émettre un événement (localement)
         * @param {string} event - Nom de l'événement
         * @param {*} data - Données à transmettre
         */
        emit(event, data) {
            const callbacks = eventListeners.get(event);
            if (callbacks) {
                callbacks.forEach(cb => {
                    try {
                        cb(data);
                    } catch (e) {
                        console.error(`[EventBus] Erreur dans le callback de ${event}:`, e);
                    }
                });
            }
        },

        /**
         * Supprimer tous les écouteurs d'un événement
         * @param {string} event - Nom de l'événement
         */
        off(event) {
            if (event) {
                eventListeners.delete(event);
            } else {
                eventListeners.clear();
            }
        }
    };

    // ========== CROSS-TAB SYNCHRONISATION ==========
    // Utilise localStorage events pour communiquer entre onglets
    
    /**
     * Envoyer un message à tous les autres onglets
     * @param {string} type - Type de message (user_updated, cart_updated, etc.)
     * @param {*} payload - Données du message
     */
    function broadcastToTabs(type, payload) {
        try {
            const message = {
                type,
                payload,
                timestamp: Date.now(),
                sourceTab: sessionStorage.getItem(STORAGE_PREFIX + 'tab_id') || generateTabId()
            };
            
            // Stocker l'événement dans localStorage pour déclencher l'event storage
            localStorage.setItem(SYNC_EVENT_KEY, JSON.stringify(message));
            
            // Nettoyer après un court délai pour ne pas encombrer
            setTimeout(() => {
                if (localStorage.getItem(SYNC_EVENT_KEY) === JSON.stringify(message)) {
                    localStorage.removeItem(SYNC_EVENT_KEY);
                }
            }, 500);
        } catch (e) {
            console.warn('[Sync] Impossible de diffuser le message:', e);
        }
    }

    /**
     * Générer un ID unique pour l'onglet courant
     */
    function generateTabId() {
        const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 8);
        sessionStorage.setItem(STORAGE_PREFIX + 'tab_id', id);
        return id;
    }

    /**
     * Obtenir l'ID de l'onglet courant
     */
    function getCurrentTabId() {
        let id = sessionStorage.getItem(STORAGE_PREFIX + 'tab_id');
        if (!id) {
            id = generateTabId();
        }
        return id;
    }

    /**
     * Écouter les messages des autres onglets
     * @param {Function} callback - Fonction appelée à réception d'un message
     */
    function onTabMessage(callback) {
        window.addEventListener('storage', (event) => {
            // Vérifier si c'est notre événement de synchronisation
            if (event.key === SYNC_EVENT_KEY && event.newValue) {
                try {
                    const message = JSON.parse(event.newValue);
                    // Ignorer les messages envoyés par le même onglet
                    if (message.sourceTab !== getCurrentTabId()) {
                        callback(message.type, message.payload);
                    }
                } catch (e) {
                    console.warn('[Sync] Erreur de parsing du message:', e);
                }
            }
        });
    }

    // ========== GESTION DES DONNÉES CENTRALISÉE ==========
    
    /**
     * Récupérer une donnée du storage
     * @param {string} key - Clé (sans préfixe)
     * @param {*} defaultValue - Valeur par défaut
     */
    function getStorage(key, defaultValue = null) {
        try {
            const raw = localStorage.getItem(STORAGE_PREFIX + key);
            return raw ? JSON.parse(raw) : defaultValue;
        } catch (e) {
            return defaultValue;
        }
    }

    /**
     * Sauvegarder une donnée et notifier les autres onglets
     * @param {string} key - Clé (sans préfixe)
     * @param {*} value - Valeur à sauvegarder
     * @param {boolean} silent - Si true, ne pas notifier les autres onglets
     */
    function setStorage(key, value, silent = false) {
        const oldValue = getStorage(key);
        const newValueStr = JSON.stringify(value);
        
        localStorage.setItem(STORAGE_PREFIX + key, newValueStr);
        
        if (!silent && JSON.stringify(oldValue) !== newValueStr) {
            // Diffuser le changement aux autres onglets
            broadcastToTabs('storage_update', { key, value });
            
            // Émettre localement
            EventBus.emit(`storage:${key}`, { oldValue, newValue: value });
            EventBus.emit('storage:any', { key, oldValue, newValue: value });
        }
    }

    /**
     * Supprimer une donnée et notifier
     * @param {string} key - Clé (sans préfixe)
     * @param {boolean} silent - Si true, ne pas notifier
     */
    function removeStorage(key, silent = false) {
        localStorage.removeItem(STORAGE_PREFIX + key);
        
        if (!silent) {
            broadcastToTabs('storage_remove', { key });
            EventBus.emit(`storage:${key}:remove`, { key });
            EventBus.emit('storage:any:remove', { key });
        }
    }

    // ========== HOOKS POUR LES MODIFICATIONS SPÉCIFIQUES ==========
    
    /**
     * Mettre à jour un utilisateur et propager le changement
     * @param {string} userId - ID de l'utilisateur
     * @param {object} updates - Modifications à appliquer
     */
    function updateUser(userId, updates) {
        const users = getStorage('users', []);
        const userIndex = users.findIndex(u => u.id === userId);
        
        if (userIndex !== -1) {
            const oldUser = { ...users[userIndex] };
            users[userIndex] = { ...users[userIndex], ...updates };
            setStorage('users', users);
            
            // Émettre un événement spécifique
            EventBus.emit('user:updated', { userId, oldUser, newUser: users[userIndex] });
            
            // Si l'utilisateur modifié est l'utilisateur courant, mettre à jour la session
            const session = getStorage('session');
            if (session && session.user && session.user.id === userId) {
                session.user = { ...session.user, ...updates };
                setStorage('session', session);
                EventBus.emit('session:updated', session.user);
            }
            
            return true;
        }
        return false;
    }

    /**
     * Mettre à jour un produit et propager
     * @param {number|string} productId - ID du produit
     * @param {object} updates - Modifications
     */
    function updateProduct(productId, updates) {
        const products = getStorage('products', []);
        const productIndex = products.findIndex(p => p.id == productId);
        
        if (productIndex !== -1) {
            products[productIndex] = { ...products[productIndex], ...updates };
            setStorage('products', products);
            EventBus.emit('product:updated', { productId, product: products[productIndex] });
            return true;
        }
        return false;
    }

    /**
     * Ajouter un produit et propager
     * @param {object} product - Nouveau produit
     */
    function addProduct(product) {
        const products = getStorage('products', []);
        const newProduct = {
            id: Date.now(),
            ...product,
            createdAt: new Date().toISOString()
        };
        products.push(newProduct);
        setStorage('products', products);
        EventBus.emit('product:added', newProduct);
        return newProduct;
    }

    /**
     * Supprimer un produit et propager
     * @param {number|string} productId - ID du produit
     */
    function deleteProduct(productId) {
        const products = getStorage('products', []);
        const filtered = products.filter(p => p.id != productId);
        
        if (filtered.length !== products.length) {
            setStorage('products', filtered);
            EventBus.emit('product:deleted', { productId });
            return true;
        }
        return false;
    }

    /**
     * Mettre à jour une commande
     * @param {string} orderId - ID de la commande
     * @param {object} updates - Modifications
     */
    function updateOrder(orderId, updates) {
        const orders = getStorage('orders', []);
        const orderIndex = orders.findIndex(o => o.id === orderId);
        
        if (orderIndex !== -1) {
            const oldOrder = { ...orders[orderIndex] };
            orders[orderIndex] = { ...orders[orderIndex], ...updates };
            
            // Ajouter à l'historique si le statut change
            if (updates.status && updates.status !== oldOrder.status) {
                if (!orders[orderIndex].statusHistory) orders[orderIndex].statusHistory = [];
                orders[orderIndex].statusHistory.push({
                    status: updates.status,
                    timestamp: new Date().toISOString(),
                    note: updates.statusNote || 'Mis à jour par le système'
                });
            }
            
            setStorage('orders', orders);
            EventBus.emit('order:updated', { orderId, oldOrder, newOrder: orders[orderIndex] });
            return true;
        }
        return false;
    }

    /**
     * Mettre à jour le panier (local, pas de broadcast)
     * @param {array} cart - Nouveau panier
     */
    function updateCart(cart) {
        const oldCart = getStorage('cart', []);
        setStorage('cart', cart);
        EventBus.emit('cart:updated', { oldCart, newCart: cart });
    }

    /**
     * Ajouter un article au panier
     * @param {object} item - Article à ajouter
     */
    function addToCart(item) {
        const cart = getStorage('cart', []);
        const existingIndex = cart.findIndex(i => i.id === item.id);
        
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += item.quantity || 1;
        } else {
            cart.push({
                ...item,
                key: `prod_${item.id}_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                quantity: item.quantity || 1
            });
        }
        
        updateCart(cart);
        EventBus.emit('cart:itemAdded', item);
        return cart;
    }

    /**
     * Retirer un article du panier
     * @param {string} key - Clé unique de l'article
     */
    function removeFromCart(key) {
        const cart = getStorage('cart', []);
        const filtered = cart.filter(i => i.key !== key);
        
        if (filtered.length !== cart.length) {
            updateCart(filtered);
            EventBus.emit('cart:itemRemoved', { key });
        }
    }

    /**
     * Vider le panier
     */
    function clearCart() {
        updateCart([]);
        EventBus.emit('cart:cleared');
    }

    // ========== INITIALISATION ==========
    let isInitialized = false;
    const refreshCallbacks = [];

    /**
     * Enregistrer une fonction à appeler lors d'un rafraîchissement global
     * @param {Function} callback - Fonction à exécuter
     * @param {string} pageName - Nom de la page (pour le débogage)
     */
    function onGlobalRefresh(callback, pageName = 'unknown') {
        refreshCallbacks.push({ callback, pageName });
    }

    /**
     * Déclencher un rafraîchissement global de toutes les pages
     * @param {string} source - Source du refresh (page qui l'a déclenché)
     */
    function triggerGlobalRefresh(source = 'system') {
        console.log(`[Sync] Rafraîchissement global demandé par ${source}`);
        broadcastToTabs('global_refresh', { source, timestamp: Date.now() });
        
        // Exécuter localement aussi
        refreshCallbacks.forEach(({ callback, pageName }) => {
            try {
                callback();
            } catch (e) {
                console.error(`[Sync] Erreur dans le callback de ${pageName}:`, e);
            }
        });
        
        EventBus.emit('global:refresh', { source });
    }

    /**
     * Initialiser le système de synchronisation
     */
    function initGlobalSync() {
        if (isInitialized) return;
        
        // Initialiser la version si nécessaire
        if (!getStorage('version')) {
            setStorage('version', CURRENT_VERSION);
        }
        
        // Écouter les messages des autres onglets
        onTabMessage((type, payload) => {
            switch (type) {
                case 'storage_update':
                    // Une donnée a été modifiée dans un autre onglet
                    EventBus.emit(`storage:${payload.key}:external`, payload.value);
                    EventBus.emit('storage:any:external', payload);
                    
                    // Pour certains types de données, déclencher des événements spécifiques
                    if (payload.key === 'users') {
                        EventBus.emit('users:updated:external', payload.value);
                        // Vérifier si l'utilisateur courant est concerné
                        const session = getStorage('session');
                        if (session && session.user) {
                            const users = payload.value;
                            const currentUser = users.find(u => u.id === session.user.id);
                            if (currentUser && JSON.stringify(currentUser) !== JSON.stringify(session.user)) {
                                session.user = currentUser;
                                setStorage('session', session, true);
                                EventBus.emit('session:updated', session.user);
                            }
                        }
                    }
                    
                    if (payload.key === 'products') {
                        EventBus.emit('products:updated:external', payload.value);
                    }
                    
                    if (payload.key === 'orders') {
                        EventBus.emit('orders:updated:external', payload.value);
                    }
                    break;
                    
                case 'storage_remove':
                    EventBus.emit(`storage:${payload.key}:remove:external`, payload);
                    break;
                    
                case 'global_refresh':
                    // Un autre onglet demande un rafraîchissement
                    refreshCallbacks.forEach(({ callback, pageName }) => {
                        try {
                            callback();
                            console.log(`[Sync] Page ${pageName} rafraîchie via demande externe`);
                        } catch (e) {
                            console.error(`[Sync] Erreur dans le callback de ${pageName}:`, e);
                        }
                    });
                    EventBus.emit('global:refresh:external', payload);
                    break;
                    
                default:
                    EventBus.emit(`sync:${type}`, payload);
            }
        });
        
        isInitialized = true;
        console.log('[Sync] Système de synchronisation global initialisé ✅');
    }

    /**
     * Vérifier et restaurer la session si nécessaire
     */
    function validateSession() {
        const session = getStorage('session');
        if (!session) return null;
        
        if (session.expires && session.expires <= Date.now()) {
            removeStorage('session');
            return null;
        }
        
        // Vérifier que l'utilisateur existe toujours dans la base
        const users = getStorage('users', []);
        const userExists = users.some(u => u.id === session.user.id);
        
        if (!userExists) {
            removeStorage('session');
            return null;
        }
        
        return session;
    }

    // ========== EXPORTS ==========
    window.SalamSync = {
        // Core
        EventBus,
        getStorage,
        setStorage,
        removeStorage,
        
        // User management
        updateUser,
        
        // Product management
        updateProduct,
        addProduct,
        deleteProduct,
        
        // Order management
        updateOrder,
        
        // Cart management
        updateCart,
        addToCart,
        removeFromCart,
        clearCart,
        
        // Global refresh
        onGlobalRefresh,
        triggerGlobalRefresh,
        
        // Session
        validateSession,
        
        // Init
        init: initGlobalSync,
        
        // Version
        version: CURRENT_VERSION
    };

    // Auto-initialisation au chargement
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlobalSync);
    } else {
        initGlobalSync();
    }
})();