const CACHE_NAME = 'max-reality-v6'; // bump version to force re-cache

const ASSETS = [
  'Azul-doll.png',
  'Azul-doll2.png',
  'Azul-doll3.png',
  'Azul-doll4.png',
  'index.html',
  'comfort.html',
  'manifest.json',
  'Banner-16.png',
  'Banner-32.png',
  'Banner-180.png',
  'Banner.PNG',
  'password-infinity.mp3',
  'beast_mode.mp3',
  'old-pc.png',
  'snack-portal.png',
  'floor.png',
  'gg-bg.png',
  'pompeii-bg.png',
  'building-a.png',
  'building-b.png',
  'building-c.png',
  'lori-blur.png',
  'sw.js',
  'rubble.png',
  'herc-bust.png',
  'worse.png',
  '2tb.png',
  'card.png',
  'circuitpython.png',
  'core-i7.png',
  'core-i9.png',
  'cpu-water-cooler.png',
  'curve-keyboard.png',
  'graphics-card.png',
  'motherboard.png',
  'optical-drive.png',
  'power-supply.png',
  'ram.png',
  'ssd.png',
  'azulo_blueberry_vanilla.jpg',
  'bread-slice.png',
  'chips.png',
  'hotdog.png',
  'mochkil-burger.png',
  'mochkil_puffs_orange.png',
  'pink-donut.png',
  'roast-chicken.png',
  'soda.png',
  'taco.png',
  'book.png',
  'pottery.png',
  'pottery2.png',
  'pottery3.png',
  'pottery4.png',
  'scrolls.png',
  'hot-food-c-store-wp.JPG'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch((err) => {
        console.log("Missing:", event.request.url);
      });
    })
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
