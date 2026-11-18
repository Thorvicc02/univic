const CACHE = "mi-u-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./favicon.ico"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Red primero, sin caché HTTP (GitHub Pages guarda ~10 min).
  // Si no hay internet, usamos la caché local.
  e.respondWith((async () => {
    try {
      const res = await fetch(e.request, { cache: "no-store" });
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    } catch (err) {
      return (await caches.match(e.request, { ignoreSearch: true })) || (await caches.match("./index.html"));
    }
  })());
});
