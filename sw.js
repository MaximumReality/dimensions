self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // This just lets the game load normally
  event.respondWith(fetch(event.request));
});
