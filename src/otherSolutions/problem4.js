const isPalindrome = n => {
  let original = n.toString().split('')
  let result = original.slice()
  result = result.reverse().join('')
  original = original.join('')
  if ( result === original ) return true
  return false
}

const largestPalindromeProduct2 = n => {
  const upperLimit = Math.pow( 10, n )
  const lowerLimit = Math.pow( 10, n - 1 )
  let max = 1
  for (let i = upperLimit - 1; i >= lowerLimit; i--) {
    for (let j = upperLimit - 1; j >= i; j--) {
      if ( i * j <= max ) break
      if ( isPalindrome( i * j ) ) max = i * j
    }
  }
  return max
}

const isPalindrome2 = original => {
  let reversed = 0, num = original
  while ( num > 0 ) {
    reversed = 10 * reversed + num % 10
    num = Math.floor( num / 10 )
  }
  return reversed === original
}

const largestPalindromeProduct3 = n => {
  const upperLimit = Math.pow( 10, n )
  const lowerLimit = Math.pow( 10, n - 1 )
  let max = 1
  for (let i = upperLimit - 1; i >= lowerLimit; i--) {
    for (let j = upperLimit - 1; j >= i; j--) {
      if ( i * j <= max ) break
      if ( isPalindrome2( i * j ) ) max = i * j
    }
  }
  return max
}


module.exports = {largestPalindromeProduct2, largestPalindromeProduct3}
