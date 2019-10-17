console.log("SW Startup!");

self.addEventListener('install', function(event){
    console.log('installed!');
});

// Service Worker Active
self.addEventListener('activate', function(event){
    console.log('activated!');
});

self.addEventListener('message', function(event){
    console.log("SW Received Message: " + event.data);
    doPointlessComputationsWithBlocking();
});





// ------------- calculation.js --------------------
const iterations = 5000;
const multiplier = 1000000000;

function calculatePrimes(iterations, multiplier) {
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = Math.floor( i * multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
       }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}

function doPointlessComputationsWithBlocking() {
  var primes = calculatePrimes(iterations, multiplier);
  console.log(primes);
}