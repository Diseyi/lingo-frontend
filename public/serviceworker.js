console.log('hello from the service worker file')
// This code executes in its own worker or threads
self.addEventListener("install", event => {
	console.log("Service worker installed", event);
 });
 self.addEventListener("activate", event => {
	console.log("Service worker activated", event);
 });