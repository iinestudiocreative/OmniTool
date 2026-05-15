const CACHE_NAME = 'omnitool-v2';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './config.js',
    './icon.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    // Ignorer les requêtes d'API (comme Google Maps ou Tesseract)
    if (event.request.url.includes('maps.googleapis.com') || event.request.url.includes('unpkg.com')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).catch(err => console.log('Fetch error', err));
            })
    );
});
