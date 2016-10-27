const test = require('./testConfig')
const sumOfPrimes = require('../problems/problem10')
const {sumOfPrimes2, sumOfPrimes3} = require('../otherSolutions/problem10')

test('Sum of Primes', function (t) {
  t.equal(sumOfPrimes(10), 17, '10 returned 17')

  console.time('Time taken for solution 1')
  t.equal(sumOfPrimes(2000000), 142913828922, '2000000 returned 142913828922')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(sumOfPrimes2(2000000), 142913828922, '2000000 returned 142913828922')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(sumOfPrimes3(2000000), 142913828922, '2000000 returned 142913828922')
  console.timeEnd('Time taken for solution 3')

  t.end()
})
