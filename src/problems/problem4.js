const isPalindrome = n => {
  let original = n.toString().split('')
  let result = original.slice()
  result = result.reverse().join('')
  original = original.join('')
  if ( result === original ) return true
  return false
}

const largestPalindromeProduct = n => {
  const upperLimit = Math.pow( 10, n )
  const lowerLimit = Math.pow( 10, n - 1 )
  let max = 1
  for (let i = lowerLimit; i < upperLimit; i++) {
    for (let j = lowerLimit; j < upperLimit; j++) {
      if ( isPalindrome( i * j ) && i * j > max) {
        max = i * j
      }
    }
  }
  return max
}

module.exports = {largestPalindromeProduct, isPalindrome}
