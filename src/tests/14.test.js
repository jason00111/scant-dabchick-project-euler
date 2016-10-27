const test = require('./testConfig')
const {longestCollatzSequence, lengthOfCollatzSequence} = require('../problems/problem14')

test('Longest Collatz Sequence', function (t) {
  console.time('longestCollatzSequence')
  t.equal(longestCollatzSequence(1000000), 837799, '1000000 returned 837799')
  console.timeEnd('longestCollatzSequence')
  t.end()
})

test('Length Of Collatz Sequence', function (t) {
  t.equal(lengthOfCollatzSequence(13), 10, '13 returned 10')
  t.equal(lengthOfCollatzSequence(5), 6, '5 returned 6')
  t.end()
})
