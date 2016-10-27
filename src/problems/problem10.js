const isPrime = num => {
  const sqrtM = Math.sqrt(num)
  for (let i = 2; i <= sqrtM; i++) {
    if ( num % i === 0 ) {
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
