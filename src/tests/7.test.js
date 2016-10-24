const test = require('./testConfig')
const tenThousandAndFirstPrime = require('../problems/problem7')

test('10,001st Prime', function (t) {
  t.equal(tenThousandAndFirstPrime(6), 13, '6 returned 13')
  t.equal(tenThousandAndFirstPrime(10001), 104743, '10001 returned 104743')
  t.end()
})
