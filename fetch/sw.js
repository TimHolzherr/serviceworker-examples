self.addEventListener('fetch', function(event) {
  if (event.request.url.endsWith("does-not-exist.js")) {    
    var file =  ["alert('Hallo from Service Worker')"];
    var blob = new Blob(file, {type : 'text/javascript'});
    var response =  new Response(blob, {"status" : 200 , "statusText" : "OK"});
    event.respondWith(Promise.resolve(response));
  }    
});