const isPrime = num => {
  const sqrtM = Math.sqrt(num)
  for (let i = 2; i <= sqrtM; i++) {
    if ( num % i === 0 ) {
      return false
    }
  }
  return true
}

const tenThousandAndFirstPrime = n => {
  let count = 0
  for (let i = 2; ; i++) {
    if ( isPrime(i) ) count++
    if ( count === n ) return i
  }
}

module.exports = tenThousandAndFirstPrime
