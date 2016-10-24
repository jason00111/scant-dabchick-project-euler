const test = require('./testConfig')
const evenFibonacciNumbers = require('../problems/problem2')

test('Even Fibonacci Numbers', function (t) {
  t.equal(evenFibonacciNumbers(89), 44, '89 returned 44')
  t.equal(evenFibonacciNumbers(34), 44, '34 returned 44')
  t.equal(evenFibonacciNumbers(33), 10, '33 returned 10')
  t.equal(evenFibonacciNumbers(4000000), 4613732, '4000000 returned 4613732')
  t.end()
})
