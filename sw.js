const cacheName = "walletaya-cache-v3";
const contentToCache = [
  "/src/main.js",
  "/src/assets/styles/index.scss",
  "/src/components/App.vue",
  // "/src/views/Portfolio/index.vue",
  // "/src/views/Portfolio/Wallet.vue",
  // "/src/views/Portfolio/History.vue",
  // "/src/components/Tabs.vue",
  // "/src/components/Tab.vue",
  // "/src/views/Portfolio/WalletTokenLine.vue",
  // "/src/views/Portfolio/TransactionForm.vue",
  // "/src/components/Drawer.vue",
  // "/src/views/Portfolio/WalletTokenDetail.vue",
  // "/src/components/forms/InputNumber.vue",
  // "/src/components/forms/DatePicker.vue",
  // "/src/components/forms/ButtonGroup.vue",
];

self.addEventListener("install", (event) => {
  console.info("Service worker is installing ...");
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })()
  );
});

self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(cacheName)) {
            return caches.delete(key);
          }
        })
      );
    })()
  );
  console.info("Service worker is actived !");
});

self.addEventListener("fetch", (event) => {
  console.info("Fetch detected on file : " + event.request.url);

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        return fetch(event.request);
      } catch (err) {
        console.err("Failed to fetch", err);
      }
    })
  );
});
