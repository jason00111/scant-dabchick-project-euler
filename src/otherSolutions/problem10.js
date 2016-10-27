const sumOfPrimes2 = limit => {
  let crosslimit = Math.floor(Math.sqrt(limit))
  let sieve = Array(limit).fill(false)

  for ( let i = 4; i <= limit; i += 2 ) {
    sieve[i] = true
  }

  for ( let j = 3; j <= crosslimit; j += 2 ) {
    if ( !sieve[j] ) {
      for ( let m = j * j; m <= limit; m += 2 * j ) {
        sieve[m] = true
      }
    }
  }

  let sum = 0

  for ( let k = 2; k <= limit; k++ ) {
    if ( !sieve[k] ) {
      sum += k
    }
  }

  return sum
}

const sumOfPrimes3 = limit => {
  let sievebound = Math.floor( (limit - 1) / 2 )
  let sieve = Array(sievebound).fill(false)
  let crosslimit = (Math.floor(Math.sqrt(limit)) - 1) / 2

  for ( let i = 1; i <= crosslimit; i++ ) {
    if ( !sieve[i] ) {
      for ( let j = 2 * i * ( i + 1 ); j <= sievebound; j += 2 * i + 1 ) {
        sieve[j] = true
      }
    }
  }

  let sum = 2
  for ( k = 1; k <= sievebound; k++ ) {
    if ( !sieve[k] ) {
      sum += 2 * k + 1
    }
  }

  return sum
}

module.exports = {sumOfPrimes2, sumOfPrimes3}
