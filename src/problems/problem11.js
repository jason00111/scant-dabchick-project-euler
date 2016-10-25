


const largestProductInAGrid = ( grid, n ) => {
  let max = 0
  let sum = 0
  for ( let i = 0; i < grid.length; i++ ) {
    for ( let j = 0; j < grid[0].length - n; j++ ) {
      sum = 0
      for ( let k = 0; k < n; k++ ) {
        sum += grid[i][j]
      }
      max = max < sum ? sum : max
    }
  }
  for ( let i = 0; i < grid[0].length; i++ ) {
    for ( let j = 0; j < grid.length - n; j++ ) {
      sum = 0
      for ( let k = 0; k < n; k++ ) {
        sum += grid[]
      }
    }
  }
}

module.exports = largestProductInAGrid
