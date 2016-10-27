const test = require('./testConfig')
const multiplesOfThreeAndFive = require('../problems/problem1')
const {multiplesOfThreeAndFive2, multiplesOfThreeAndFive3} = require('../otherSolutions/problem1')

test.only('Multiples of three and five', function (t) {
  t.equal(multiplesOfThreeAndFive(10), 23, '10 returned 23')

  console.time('multiplesOfThreeAndFive')
  t.equal(multiplesOfThreeAndFive(1000), 233168, '1000 returned 233168')
  console.timeEnd('multiplesOfThreeAndFive')

  console.time('multiplesOfThreeAndFive2')
  t.equal(multiplesOfThreeAndFive2(1000), 233168, '1000 returned 233168')
  console.timeEnd('multiplesOfThreeAndFive2')

  console.time('multiplesOfThreeAndFive3')
  t.equal(multiplesOfThreeAndFive3(1000), 233168, '1000 returned 233168')
  console.timeEnd('multiplesOfThreeAndFive3')
  
  t.end()
})
