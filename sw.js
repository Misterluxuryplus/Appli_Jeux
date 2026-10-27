'use strict';
const ROOT = new URL('./', self.location.href);
const PREFIX = 'sylvain-steph:' + ROOT.pathname + ':';
const CACHE = PREFIX + 'v26-1';
const ASSETS = ['./', './index.html', './classique.html', './v25.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('message', event => { if (event.data === 'ACTIVATE') self.skipWaiting(); });
self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const key of await caches.keys()) if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (event.request.mode === 'navigate') {
      const name = url.pathname.slice(ROOT.pathname.length);
      const page = ['v25.html', 'classique.html'].includes(name) ? name : 'index.html';
      return (await cache.match(new URL(page, ROOT).href)) || fetch(event.request);
    }
    return (await cache.match(event.request)) || fetch(event.request);
  })());
});
