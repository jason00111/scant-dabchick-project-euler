const test = require('./testConfig')
const {highlyDivisibleTriangleNumber, numOfFactors} = require('../problems/problem12')

test('Number of Factors', function (t) {
  t.equal(numOfFactors(1), 1, '1 returned 1')
  t.equal(numOfFactors(3), 2, '3 returned 2')
  t.equal(numOfFactors(6), 4, '6 returned 4')
  t.equal(numOfFactors(10), 4, '10 returned 4')
  t.equal(numOfFactors(15), 4, '15 returned 4')
  t.equal(numOfFactors(21), 4, '21 returned 4')
  t.equal(numOfFactors(28), 6, '28 returned 6')
  t.end()
})

test('Highly Divisible Triangle Number', function (t) {
  t.equal(highlyDivisibleTriangleNumber(5), 28, '5 returned 28')
  t.equal(highlyDivisibleTriangleNumber(500), 76576500, '500 returned 76576500')
  t.end()
})
