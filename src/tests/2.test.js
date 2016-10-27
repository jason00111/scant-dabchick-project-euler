const test = require('./testConfig')
const evenFibonacciNumbers = require('../problems/problem2')
const {evenFibonacciNumbers2, evenFibonacciNumbers3} = require('../otherSolutions/problem2')

test('Even Fibonacci Numbers', function (t) {
  t.equal(evenFibonacciNumbers(89), 44, '89 returned 44')
  t.equal(evenFibonacciNumbers(34), 44, '34 returned 44')
  t.equal(evenFibonacciNumbers(33), 10, '33 returned 10')

  console.time('Time taken for solution 1')
  t.equal(evenFibonacciNumbers(4000000), 4613732, '4000000 returned 4613732')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(evenFibonacciNumbers2(4000000), 4613732, '4000000 returned 4613732')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(evenFibonacciNumbers3(4000000), 4613732, '4000000 returned 4613732')
  console.timeEnd('Time taken for solution 3')

  t.end()
})
