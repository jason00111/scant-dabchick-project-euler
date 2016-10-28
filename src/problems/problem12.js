const numOfFactors = n => {
  if ( n === 1 ) return 1
  let count = 0
  const sqrtN = Math.floor( Math.sqrt(n) )
  for (let i = 1; i <= sqrtN ; i++) {
    if ( n % i === 0 ) {
      count++
    }
  }
  if ( n === sqrtN * sqrtN ) return count * 2 - 1
  return count * 2
}

const highlyDivisibleTriangleNumber = n => {
  let tri = 0
  for (let i = 0; ; i++) {
    tri += i
    if ( numOfFactors(tri) > n )
      return tri
  }
}

module.exports = {highlyDivisibleTriangleNumber, numOfFactors}
