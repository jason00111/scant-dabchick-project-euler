const test = require('./testConfig')
const smallestMultiple = require('../problems/problem5')

test('Smallest multiple', function (t) {
  t.equal(smallestMultiple(10), 2520, '10 returned 2520')
  console.time('smallestMultiple')
  t.equal(smallestMultiple(20), 232792560, '20 returned 232792560')
  console.timeEnd('smallestMultiple')
  t.end()
})
