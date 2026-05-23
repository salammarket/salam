// sw.js - Service Worker pour PWA Salam Market PRO
const CACHE_NAME = 'salam-market-v1';
const OFFLINE_URL = '/pages/offline.html';

// Ressources à mettre en cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/main.css',
  '/js/app.js',
  '/js/security.js',
  '/js/encryption.js',
  '/js/loyalty.js',
  '/js/chat.js',
  '/pages/dashboard.html',
  '/pages/products.html',
  '/pages/cart.html',
  '/pages/checkout.html',
  '/pages/orders.html',
  '/pages/tracking.html',
  '/pages/profile.html',
  '/pages/admin.html',
  '/pages/supplier.html',
  '/pages/chat.html',
  '/pages/offline.html',
  '/images/salam.png',
  '/images/favicon.ico',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..800&family=Space+Grotesk:wght@300..700&display=swap'
];

// Installation - cache les ressources statiques
self.addEventListener('install', (event) => {
  console.log('[SW] Installation...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Mise en cache des ressources statiques');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation - nettoyer les anciens caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Stratégie de cache: Network First avec fallback
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // API requests - ne pas cacher
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Pages HTML - Network First
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then((cachedResponse) => {
              if (cachedResponse) return cachedResponse;
              return caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }
  
  // Static assets - Cache First
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request)
          .then((response) => {
            if (response && response.status === 200 && response.type === 'basic') {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          });
      })
  );
});

// Gestion des notifications push
self.addEventListener('push', (event) => {
  console.log('[SW] Notification push reçue:', event);
  
  let data = {
    title: 'Salam Market PRO',
    body: 'Nouvelle notification',
    icon: '/images/salam-192.png',
    badge: '/images/salam-96.png',
    tag: 'notification',
    url: '/pages/dashboard.html'
  };
  
  if (event.data) {
    try {
      data = JSON.parse(event.data.text());
    } catch (e) {
      data.body = event.data.text();
    }
  }
  
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      tag: data.tag,
      vibrate: [200, 100, 200],
      data: { url: data.url },
      actions: [
        { action: 'view', title: 'Voir' },
        { action: 'close', title: 'Fermer' }
      ]
    })
  );
});

// Gestion du clic sur notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'close') return;
  
  const urlToOpen = event.notification.data?.url || '/pages/dashboard.html';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Background sync pour les actions hors ligne
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'sync-orders') {
    event.waitUntil(syncOrders());
  } else if (event.tag === 'sync-messages') {
    event.waitUntil(syncMessages());
  }
});

async function syncOrders() {
  const pendingOrders = await getPendingOrders();
  for (const order of pendingOrders) {
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
      await removePendingOrder(order.id);
    } catch (e) {
      console.error('Erreur synchro commande:', e);
    }
  }
}

async function syncMessages() {
  const pendingMessages = await getPendingMessages();
  for (const msg of pendingMessages) {
    try {
      await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msg)
      });
      await removePendingMessage(msg.id);
    } catch (e) {
      console.error('Erreur synchro message:', e);
    }
  }
}
