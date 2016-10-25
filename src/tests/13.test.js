const test = require('./testConfig')
const largeSum = require('../problems/problem13')

test('largeSum', function (t) {
  t.equal(largeSum(3), 1578092114, '3 returned 1578092114')
  t.equal(largeSum(4), 2497514247, '4 returned 2497514247')
  t.equal(largeSum(100), 5537376230, '100 returned 5537376230')
  t.end()
})
