const test = require('./testConfig')
const specialPythagoreanTriplet = require('../problems/problem9')
const {specialPythagoreanTriplet2, specialPythagoreanTriplet3} = require('../otherSolutions/problem9')

test('Special Pythagorean Triplet', function (t) {
  t.equal(specialPythagoreanTriplet(12), 60, '12 returned 60')

  console.time('Time taken for solution 1')
  t.equal(specialPythagoreanTriplet(1000), 31875000, '1000 returned 31875000')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(specialPythagoreanTriplet2(1000), 31875000, '1000 returned 31875000')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(specialPythagoreanTriplet3(1000), 31875000, '1000 returned 31875000')
  console.timeEnd('Time taken for solution 3')

  t.end()
})
