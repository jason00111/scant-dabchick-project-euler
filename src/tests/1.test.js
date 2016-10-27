const test = require('./testConfig')
const multiplesOfThreeAndFive = require('../problems/problem1')
const {multiplesOfThreeAndFive2, multiplesOfThreeAndFive3} = require('../otherSolutions/problem1')

test('Multiples of three and five', function (t) {
  t.equal(multiplesOfThreeAndFive(10), 23, '10 returned 23')

  console.time('Time taken for solution 1')
  t.equal(multiplesOfThreeAndFive(1000), 233168, '1000 returned 233168')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(multiplesOfThreeAndFive2(1000), 233168, '1000 returned 233168')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(multiplesOfThreeAndFive3(1000), 233168, '1000 returned 233168')
  console.timeEnd('Time taken for solution 3')

  t.end()
})
