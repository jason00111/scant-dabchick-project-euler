const test = require('./testConfig')
const latticePaths = require('../problems/problem15')
const {latticePaths2, latticePaths3} = require('../otherSolutions/problem15')

test('latticePaths', function (t) {
  t.equal(latticePaths( 6 ), 924, ' 6 returned 924')
  t.equal(latticePaths( 5 ), 252, '5 returned 252')
  t.equal(latticePaths( 4 ), 70, '4 returned 70')
  t.equal(latticePaths( 3 ), 20, '3 returned 20')
  t.equal(latticePaths( 1 ), 2, '1 returned 2')
  t.equal(latticePaths( 8 ), 12870, '8 returned 12870')
  t.equal(latticePaths( 15 ), 155117520, '15 returned 155117520')

  console.time('Time taken for solution 1')
  t.equal(latticePaths( 20 ), 137846528820, '20 returned 137846528820')
  console.timeEnd('Time taken for solution 1')

  console.time('Time taken for solution 2')
  t.equal(latticePaths2( 20, 20 ), 137846528820, '20 returned 137846528820')
  console.timeEnd('Time taken for solution 2')

  console.time('Time taken for solution 3')
  t.equal(latticePaths3( 20 ), 137846528820, '20 returned 137846528820')
  console.timeEnd('Time taken for solution 3')

  t.end()
})
