
const largestPrimeFactor2 = n => {
  let factor = 2
  let lastFactor = 1
  while ( n > 1 ) {
    if ( n % factor === 0 ) {
      lastFactor = factor
      n = n / factor
      while ( n % factor === 0 ) {
        n = n / factor
      }
    }
    factor = factor + 1
  }
  return lastFactor
}

const largestPrimeFactor3 = n => {
  let lastFactor, factor = 3, maxfactor
  if ( n % 2 === 0 ) {
    lastFactor = 2
    n = n / 2
    while ( n % 2 === 0 ) { n = n / 2 }
  } else {
    lastFactor = 1
  }
  maxfactor = Math.sqrt( n )
  while ( n > 1 && factor <= maxfactor ) {
    if ( n % factor === 0 ) {
      n = n / factor
      lastFactor = factor
      while ( n % factor === 0 ) {
        n = n / factor
      }
      maxfactor = Math.sqrt( n )
    }
    factor = factor + 2
  }
  if ( n === 1 ) { return lastFactor }
  else { return n }
}

module.exports = {largestPrimeFactor2, largestPrimeFactor3}
