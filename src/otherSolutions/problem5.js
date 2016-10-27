
const smallestMultiple2 = limit => {
    let i, n = 1;

    function largestPower(n, limit) {
        let p, e = 2, largest = n;
        while ((p = Math.pow(n, e)) <= limit) {
            largest = p;
            e += 1;
        }
        return largest;
    }

    function isPrime(n) {
        let i, limit = Math.ceil(Math.sqrt(n));
        for (i = 3; i <= limit; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (i = 3; i <= limit; i += 2) {
        if (isPrime(i)) {
            n *= largestPower(i, limit);
        }
    }

    return n * largestPower(2, limit);
}

const smallestMultiple3 = n => {
  function gcd(n1,n2) {
    if ( n1 == n2 ) { return n1; }

    var r;
    while ( n2 != 0 ) {
        r  = n1 % n2;
        n1 = n2;
        n2 = r;
    }
    return n1;
  }

  function lcm(n1,n2) {
      return n1 * n2 / gcd(n1,n2);
  }

  var t = 1;
  for (var i=2; i <= n; i++) {
      t = lcm(i, t);
  }
  return t
}


module.exports = {smallestMultiple2, smallestMultiple3}
