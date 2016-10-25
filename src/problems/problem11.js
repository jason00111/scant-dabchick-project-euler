const largestProductInAGrid = ( grid, n ) => {
  let max = 0
  let product

  //Horizontal grid iteration
  for ( let row = 0; row < grid.length; row++ ) {
    for ( let col = 0; col < grid[0].length + 1 - n; col++ ) {
      product = 1
      for ( let i = 0; i < n; i++ ) {
        product *= grid[row][col + i]
      }
      max = max < product ? product : max
    }
  }

  //Vertical grid iteration
  for ( let col = 0; col < grid[0].length; col++ ) {
    for ( let row = 0; row < grid.length + 1 - n; row++ ) {
      product = 1
      for ( let i = 0; i < n; i++ ) {
        product *= grid[row + i][col]
      }
      max = max < product ? product : max
    }
  }

  for ( let row = 0; row < grid.length + 1 - n; row++ ) {

    //Diagonal upper left to lower right grid iteration
    for ( let col = 0; col < grid[0].length + 1 - n; col++ ) {
      product = 1
      for ( let i = 0; i < n; i++ ) {
        product *= grid[row + i][col + i]
      }
      max = max < product ? product : max
    }
    
    //Diagonal upper right to lower left grid iteration
    for ( let col = grid[0].length - 1; col + 1 >= n; col-- ) {
      product = 1
      for ( let i = 0; i < n; i++ ) {
        product *= grid[row + i][col - i]
      }
      max = max < product ? product : max
    }
  }

  return max
}

module.exports = largestProductInAGrid
