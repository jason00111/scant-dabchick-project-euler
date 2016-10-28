const test = require('./testConfig')
const {longestCollatzSequence, lengthOfCollatzSequence} = require('../problems/problem14')
const {longestCollatzSequence2, longestCollatzSequence3} = require('../otherSolutions/problem14')

test('Longest Collatz Sequence', function (t) {
  console.time('Time taken for solution 1')
  t.equal(longestCollatzSequence(1000000), 837799, '1000000 returned 837799')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(longestCollatzSequence2(1000000), 837799, '1000000 returned 837799')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(longestCollatzSequence3(1000000), 837799, '1000000 returned 837799')
  console.timeEnd('Time taken for solution 3')

  t.end()
})

test('Length Of Collatz Sequence', function (t) {
  t.equal(lengthOfCollatzSequence(13), 10, '13 returned 10')
  t.equal(lengthOfCollatzSequence(5), 6, '5 returned 6')
  t.end()
})
