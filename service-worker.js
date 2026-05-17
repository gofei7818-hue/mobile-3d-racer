const CACHE_NAME = 'mobile-3d-racer-v1';
const CORE_ASSETS = [
  './','./index.html','./manifest.webmanifest','./styles/game.css','./service-worker.js',
  './src/main.js','./src/game.js','./src/car.js','./src/track.js','./src/physics.js','./src/controls.js','./src/audio.js','./src/ui.js','./src/storage.js','./src/constants.js',
  './assets/icons/icon-192.svg','./assets/icons/icon-512.svg'
];
self.addEventListener('install', (e)=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE_ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate', (e)=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', (e)=>{ if(e.request.method!=='GET') return; e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{ const copy=resp.clone(); caches.open(CACHE_NAME).then(c=>c.put(e.request,copy)); return resp; }).catch(()=>caches.match('./index.html'))));});
