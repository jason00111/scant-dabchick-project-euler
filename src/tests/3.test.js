const test = require('./testConfig')
const {largestPrimeFactor, isPrime} = require('../problems/problem3')

test('Largest Prime Factor', function (t) {
  t.equal(largestPrimeFactor(13195), 29, '13195 returned 29')
  t.equal(largestPrimeFactor(17), 17, '17 returned 17')
  t.equal(largestPrimeFactor(8), 2, '8 returned 2')
  t.equal(largestPrimeFactor(33), 11, '33 returned 11')
  t.equal(largestPrimeFactor(600851475143), 6857, '600851475143 returned 6857')
  t.end()
})

test('Is the number prime?', function (t) {
  t.equal(isPrime(1), true, '1 returned true')
  t.equal(isPrime(2), true, '2 returned true')
  t.equal(isPrime(4), false, '4 returned false')
  t.equal(isPrime(7), true, '7 returned true')
  t.equal(isPrime(28), false, '28 returned false')
  t.equal(isPrime(600851475143), false, '600851475143 returned false')
  t.end()
})
