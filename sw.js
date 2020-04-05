const cacheFiles01 = 'cacheFiles01'

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheFiles01).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/img/construction.gif',
        '/registersw.js',
        '/css/styles.css',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.url == 'https://') {
    event.respondWith(fetch(event.request).catch(function(e) {

      return new Response(JSON.stringify(''));
    }));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});