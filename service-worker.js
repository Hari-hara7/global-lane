// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('cache-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/scripts.js',
          '/path/to/icon-192x192.png',
          '/path/to/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  