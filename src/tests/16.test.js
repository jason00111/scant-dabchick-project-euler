const test = require('./testConfig')
const {powerDigitSum, add} = require('../problems/problem16')

test('Power Digit Sum', function (t) {
  t.equal(powerDigitSum(15), 26, '15 returned 26')
  t.equal(powerDigitSum(1000), 1366, '1000 returned 1366')
  t.end()
})

test('Add', function (t) {
  t.equal(add('15', '15'), '30', '15 returned 30')
  t.equal(add('1111111111111111111111111', '1111111111111111111111111'), '2222222222222222222222222', '1111111111111111111111111 returned 2222222222222222222222222')
  t.end()
})
