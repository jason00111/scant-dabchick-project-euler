const test = require('./testConfig')
const testFunc = require('../problems/problem1')

test('test description', function (t) {
  t.equal(testFunc(1), 2)

  t.end()
})
