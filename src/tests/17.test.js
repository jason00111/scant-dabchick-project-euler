const test = require('./testConfig')
const {numberLetterCount, sumNumberLetterCount} = require('../problems/problem17')

test.only('Sum Number Letter Count', function (t) {
  t.equal(sumNumberLetterCount(5), 19, '5 returned 19')
  t.equal(sumNumberLetterCount(1000), 21124, '1000 returned 21124')
  t.end()
})

test('Number Letter Count', function (t) {
  t.equal(numberLetterCount(5), 4, '5 returned 4')
  t.equal(numberLetterCount(11), 6, '11 returned 6')
  t.equal(numberLetterCount(20), 6, '20 returned 6')
  t.equal(numberLetterCount(21), 9, '21 returned 9')
  t.equal(numberLetterCount(342), 23, '342 returned 23')
  t.equal(numberLetterCount(115), 20, '115 returned 20')
  t.equal(numberLetterCount(1000), 11, '1000 returned 11')
  t.end()
})
