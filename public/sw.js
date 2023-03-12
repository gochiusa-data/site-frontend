// eslint-disable-next-line no-undef
importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@3.0.0/workbox/workbox-sw.js');
workbox.routing.registerRoute(
    /index\.html/,
    workbox.strategies.networkFirst({
        cacheName: 'workbox:html',
    })
);
workbox.routing.registerRoute(
    /.*\.js/,
    workbox.strategies.networkFirst({
        cacheName: 'workbox:js',
    })
);
workbox.routing.registerRoute(
    /.*\.css/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'workbox:css',
    })
);
workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif|webp)/,
    workbox.strategies.cacheFirst({
        cacheName: 'workbox:image',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 7 * 24 * 60 * 60,
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
);

