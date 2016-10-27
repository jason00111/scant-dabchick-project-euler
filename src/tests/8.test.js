const test = require('./testConfig')
const largestProductInASeries = require('../problems/problem8')
const largestProductInASeries2 = require('../otherSolutions/problem8')

test('Largest Product In A Series', function (t) {
  t.equal(largestProductInASeries(4), 5832, '4 returned 5832')

  console.time('Time taken for solution 1')
  t.equal(largestProductInASeries(13), 23514624000, '13 returned 23514624000')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(largestProductInASeries2(13), 23514624000, '13 returned 23514624000')
  console.timeEnd('Time taken for solution 2')

  t.end()
})
