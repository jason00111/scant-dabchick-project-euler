const test = require('./testConfig')
const {largestPalindromeProduct, isPalindrome} = require('../problems/problem4')
const {largestPalindromeProduct2, largestPalindromeProduct3} = require('../otherSolutions/problem4')

test.only('Largest Palindrome Product', function (t) {
  t.equal(largestPalindromeProduct(1), 9, '1 returned 9')
  t.equal(largestPalindromeProduct(2), 9009, '2 returned 9009')

  console.time('Time taken for solution 1')
  t.equal(largestPalindromeProduct(3), 906609, '3 returned 906609')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(largestPalindromeProduct2(3), 906609, '3 returned 906609')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(largestPalindromeProduct3(3), 906609, '3 returned 906609')
  console.timeEnd('Time taken for solution 3')

  t.end()
})

test('Is the number a palindrome?', function (t) {
  t.equal(isPalindrome(1), true, '1 returned true')
  t.equal(isPalindrome(22), true, '22 returned true')
  t.equal(isPalindrome(43), false, '43 returned false')
  t.equal(isPalindrome(707), true, '707 returned true')
  t.equal(isPalindrome(281), false, '281 returned false')
  t.equal(isPalindrome(60806), true, '60806 returned true')
  t.end()
})
