const latticePaths = n => {
  let cur = []
  let prev = []
  prev = Array( n ).fill(1)

  for ( let j = 0; j < n ; j++ ) {
    cur[0] = prev[0] + 1
    for ( let i = 1; i < n; i++ ) {
      cur[i] = cur[ i - 1 ] + prev[i]
    }
    prev = cur
  }

  return cur[ n - 1 ]
}

module.exports = latticePaths

// Amazing recursive solution that takes more than an hour
// const latticePaths = ( x, y ) => {
//   if ( x === 0 || y === 0 ) return 1
//   return latticePaths( x - 1, y ) + latticePaths( x, y - 1 )
// }
