const isPrime = m => {
  const sqrtM = Math.sqrt(m)
  for (let i = 2; i <= sqrtM; i++) {
    if ( ( m / i ) % 1 === 0 ) {
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

// Example 1
// Let the given number be n and let k = 2, 3, 4, 5, ... . For each k, if it is a factor of n then we
// divide n by k and completely divide out each k before moving to the next k. It can be seen that
// when k is a factor it will necessarily be prime, as all smaller factors have been removed, and
// the final result of this process will be n = 1.
// So a very crude version might be:
//
// n=”the evil big number”
// factor=2
// lastFactor=1
// while n>1
// if n mod factor=0
//  then
//  lastFactor=factor
//  n=n div factor
// while n mod factor=0
// n=n div factor
// factor=factor+1
// output lastFactor

// Example 2
// n=”the evil big number”
// if n mod 2=0
//  then
//  lastFactor=2
//  n=n div 2
//  while n mod 2=0
//  n=n div 2
// else
// lastFactor=1
// factor=3
// maxFactor= n
// while n>1 and factor<=maxFactor
// if n mod factor=0
//  then
//  n=n div factor
// lastFactor=factor
// while n mod factor=0
// n=n div factor
// maxFactor= n
//  factor=factor+2
// if n=1
//  then
// output lastFactor
//  else
//  output n
