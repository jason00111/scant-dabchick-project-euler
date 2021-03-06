const isPrime = num => {
  const sqrtM = Math.sqrt(num)
  for (let i = 2; i <= sqrtM; i++) {
    if ( num % i === 0 ) {
      return false
    }
  }
  return true
}

const largestPrimeFactor = n => {
  if ( isPrime(n) ) {
    return n
  }
  const sqrtN = Math.sqrt(n)
  let max = 1
  for (let i = 2; i <= sqrtN; i++) {

    if ( ( n / i ) % 1 === 0 ) {
      if ( isPrime( n / i ) ) {
        max = n / i > max ? n / i : max
      } else if ( isPrime(i) ) {
        max = i > max ? i : max
      }
    }
  }
  return max
}

module.exports = {largestPrimeFactor, isPrime}
