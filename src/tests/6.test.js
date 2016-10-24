const test = require('./testConfig')
const sumSquareDifference = require('../problems/problem6')

test.only('Sum Square Difference', function (t) {
  t.equal(sumSquareDifference(10), 2640, '10 returned 2640')
  t.equal(sumSquareDifference(100), 25164150, '100 returned 25164150')
  t.end()
})
