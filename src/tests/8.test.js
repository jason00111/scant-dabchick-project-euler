const test = require('./testConfig')
const largestProductInASeries = require('../problems/problem8')

test('Sum Square Difference', function (t) {
  t.equal(largestProductInASeries(4), 5832, '4 returned 5832')
  t.equal(largestProductInASeries(13), 23514624000, '13 returned 23514624000')
  t.end()
})
