const myFiles = [
  'css/plurasight.css',
  'html/plurasight.html',
	'imgs/nature.jpg',
	'js/main.js',
	'js/search.js',
	'js/home.js',
	'js/service-worker.js',
	'js/cache.js'

]

const staticFiles = 'local-cache'

self.addEventListener('install', event =>{
	event.waitUntil(
		caches.open(staticFiles)
		.then(cache =>{
			cache.addAll(myFiles)
		})		
	)
})

self.addEventListener('fetch', event =>{
	self.respondWith(
		caches.match(event.request)
		.then(response =>{
			if (response ) {
				console.log('files found locally at', event.request.url);
				return response;
			}
			console.log('files not locally cached, found at', event.request.url)
			return fetch(event.request)
			.then(response => {
				caches.open(staticFiles).then(cache => {
					cache.put(event.request.url, response.clone());
					return response;
				})
			})
		})
		.catch(err =>{
			console.error('files not found')
		})
		
	)
})

self.addEventListener('activate', event =>{
	const allowedList = [staticFiles]
	event.waitUntil(
		caches.keys().then(cacheNames =>{
			return Promise.all(
				cacheNames.map(cacheName =>{
					if(allowedList.indexOf(cacheName) === -1){
						return caches.delete()
					}
				})
			);

		})
	)
})