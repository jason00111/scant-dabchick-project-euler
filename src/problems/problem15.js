

const latticePaths = n => {
  let cur = []
  let prev = []
  prev = Array( n ).fill(1)
  
}

module.exports = latticePaths

// Amazing recursive solution that requires a super computer
// const latticePaths = ( x, y ) => {
//   if ( x === 0 || y === 0 ) return 1
//   return latticePaths( x - 1, y ) + latticePaths( x, y - 1 )
// }
