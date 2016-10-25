
const numOfFactors = n => {
  if ( n === 1 ) return 1
  let count = 0
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if ( n % i === 0 ) {
      count++
    }
  }
  return count * 2
}

const highlyDivisibleTriangleNumber = n => {
  let sum = 0
  for (let i = 0; ; i++) {
    sum += i
    if ( numOfFactors(sum) > n )
      return sum
  }
}


module.exports = {highlyDivisibleTriangleNumber, numOfFactors}
