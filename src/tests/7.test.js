const test = require('./testConfig')
const tenThousandAndFirstPrime = require('../problems/problem7')
const {tenThousandAndFirstPrime2, tenThousandAndFirstPrime3} = require('../otherSolutions/problem7')


test('10,001st Prime', function (t) {
  t.equal(tenThousandAndFirstPrime(6), 13, '6 returned 13')

  console.time('Time taken for solution 1')
  t.equal(tenThousandAndFirstPrime(10001), 104743, '10001 returned 104743')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(tenThousandAndFirstPrime2(10001), 104743, '10001 returned 104743')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(tenThousandAndFirstPrime3(10001), 104743, '10001 returned 104743')
  console.timeEnd('Time taken for solution 3')


  t.end()
})
