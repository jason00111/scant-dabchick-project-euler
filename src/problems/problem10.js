const isPrime = m => {
  const sqrtM = Math.sqrt(m)
  for (let i = 2; i <= sqrtM; i++) {
    if ( ( m / i ) % 1 === 0 ) {
      return false
    }
  }
  return true
}

const sumOfPrimes = n => {
  let sum = 0
  for (let i = 2; i < n; i++) {
    if ( isPrime(i) ) {
      sum += i
    }
  }
  return sum
}

module.exports = sumOfPrimes
