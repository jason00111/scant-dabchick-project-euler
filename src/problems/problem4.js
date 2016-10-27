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

// Example 1
// function reverse(n)
// reversed = 0
// while n > 0
// reversed = 10*reversed + n mod 10
// n = n/10
// return reversed
// function isPalindrome(n)
// return n = reverse(n)
//
// largestPalindrome = 0
// a = 100
// while a <= 999
// b = a //Now b=a instead of 100
// while b <= 999
// if isPalindrome(a*b) and a*b > largestPalindrome
// largestPalindrome = a*b
// b = b+1
// a = a+1
// output largestPalindrome
//
//
// Example 2
//
// function reverse(n)
// reversed = 0
// while n > 0
// reversed = 10*reversed + n mod 10
// n = n/10
// return reversed
// function isPalindrome(n)
// return n = reverse(n)
//
// largestPalindrome = 0
// a = 999
// while a >= 100
// b = 999
// while b >= a
// if a*b <= largestPalindrome
// break //Since a*b is always going to be too small
// if isPalindrome(a*b)
// largestPalindrome = a*b
// b = b-1
// a = a-1
// output largestPalindrome
