const test = require('./testConfig')
const smallestMultiple = require('../problems/problem5')
const {smallestMultiple2, smallestMultiple3} = require('../otherSolutions/problem5')


test.only('Smallest multiple', function (t) {
  t.equal(smallestMultiple(10), 2520, '10 returned 2520')

  console.time('Time taken for solution 1')
  t.equal(smallestMultiple(20), 232792560, '20 returned 232792560')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(smallestMultiple2(20), 232792560, '20 returned 232792560')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(smallestMultiple3(20), 232792560, '20 returned 232792560')
  console.timeEnd('Time taken for solution 3')

  t.end()
})
