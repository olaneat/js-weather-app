let ver = 'v1::';

self.addEventListener('install', event =>{
	console.log('service worker installing .....');
	self.skipWaiting();
})
self.addEventListener('activate', event =>{
	console.log('activation in successful .....');
})

self.addEventListener('fetch', event =>{
	console.log('fetching', event.request.url);
})