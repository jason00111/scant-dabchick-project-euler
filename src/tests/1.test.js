const test = require('./testConfig')
const multiplesOfThreeAndFive = require('../problems/problem1')

test('Multiples of three and five', function (t) {
  t.equal(multiplesOfThreeAndFive(10), 23, '10 returned 23')
  t.equal(multiplesOfThreeAndFive(1000), 233168, '1000 returned 233168')
  t.end()
})
