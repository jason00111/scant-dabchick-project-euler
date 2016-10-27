
tenThousandAndFirstPrime2 = n => {
  var a = [2];
  var cur = 3;

  while ( a.length < n ) {
      cur += 2
      if ( cur % 2 == 0 ) { continue; }

      p = true;
      for ( var j in a ) {
          if ( cur % a[j] == 0 )
          {
              p = false;
              break;
          }
      }
      if ( p ) { a.push(cur); }
  }
  return a[a.length - 1];
}

tenThousandAndFirstPrime3 = num => {
  var i, primes = [2, 3], n = 5;

  function isPrime(n) {
      var i = 1, p = primes[i],
          limit = Math.ceil(Math.sqrt(n));
      while (p <= limit) {
          if (n % p === 0) {
              return false;
          }
          i += 1;
          p = primes[i];
      }
      return true;
  }

  for (i = 2; i <= num; i += 1) {
      while (!isPrime(n)) {
          n += 2;
      }
      primes.push(n);
      n += 2;
  }
  return primes[num - 1];
}

module.exports = {tenThousandAndFirstPrime2, tenThousandAndFirstPrime3}
