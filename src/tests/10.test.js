const test = require('./testConfig')
const sumOfPrimes = require('../problems/problem10')

test('Sum of Primes', function (t) {
  t.equal(sumOfPrimes(10), 17, '10 returned 17')
  console.time('sumOfPrimes')
  t.equal(sumOfPrimes(2000000), 142913828922, '2000000 returned 142913828922')
  console.timeEnd('sumOfPrimes')
  t.end()
})
