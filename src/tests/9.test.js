const test = require('./testConfig')
const specialPythagoreanTriplet = require('../problems/problem9')

test('Special Pythagorean Triplet', function (t) {
  t.equal(specialPythagoreanTriplet(12), 60, '12 returned 60')
  t.equal(specialPythagoreanTriplet(1000), 31875000, '1000 returned 31875000')
  t.end()
})
