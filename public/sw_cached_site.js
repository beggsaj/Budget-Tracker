const cacheName = 'v4'

self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed')
})

self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated')
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Removing old cache name')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})