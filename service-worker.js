const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caché abierta');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});


self.addEventListener('push', event => {
    
    const options = {
        body: event.data.text(),
        icon: 'icon.png',
        badge: 'badge.png'
    };
    console.log(options);
    event.waitUntil(
        self.registration.showNotification('Notificación Push', options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
});
