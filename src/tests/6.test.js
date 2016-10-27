const test = require('./testConfig')
const sumSquareDifference = require('../problems/problem6')
const {sumSquareDifference2, sumSquareDifference3} = require('../otherSolutions/problem6')

test.only('Sum Square Difference', function (t) {
  t.equal(sumSquareDifference(10), 2640, '10 returned 2640')

  console.time('Time taken for solution 1')
  t.equal(sumSquareDifference(100), 25164150, '100 returned 25164150')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(sumSquareDifference2(100), 25164150, '100 returned 25164150')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(sumSquareDifference3(100), 25164150, '100 returned 25164150')
  console.timeEnd('Time taken for solution 3')

  t.end()
})
