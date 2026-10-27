const PREFIX='sylvain-steph:'+new URL('./',self.location.href).pathname+':';
const CACHE=PREFIX+'v25-1';
const ROOT=new URL('./',self.location.href);
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('message',event=>{if(event.data==='ACTIVATE')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const prefix=PREFIX;
  for(const key of await caches.keys())if(key.startsWith(prefix)&&key!==CACHE)await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    if(event.request.mode==='navigate')return (await cache.match(new URL('index.html',ROOT).href))||fetch(event.request);
    return (await cache.match(event.request))||fetch(event.request);
  })());
});
