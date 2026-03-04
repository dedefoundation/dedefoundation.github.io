self.addEventListener('install', (e) => {
  console.log('Service Worker instalado!');
});

self.addEventListener('fetch', (e) => {
  // Isso permite que o app carregue os arquivos locais
  e.respondWith(fetch(e.request));
});
