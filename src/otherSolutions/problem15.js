let cache = {}

const latticePaths2 = ( x, y ) => {
  if ( x === 0 || y === 0 ) return 1

  if ( cache[`${x},${y}`] ) return cache[`${x},${y}`]

  cache[`${x},${y}`] = latticePaths2( x - 1, y ) + latticePaths2( x, y - 1 )
  return cache[`${x},${y}`]
}

const latticePaths3 = n => {
  let result = 1
  for ( let i = 1; i <= n; i++ ) {
    result *= ( n + i ) / i
  }
  return Math.round(result)
}

module.exports = {latticePaths2, latticePaths3}
