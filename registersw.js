
//Registros de SW

navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration) {
  console.log('Test register ok, registered: ', registration.scope);
});