const largestProductInAGrid = ( grid, n ) => {
  let max = 0
  let product = Array(4)

  for ( let row = 0; row < grid.length; row++ ) {
    for ( let col = 0; col < grid[0].length; col++ ) {
      product.fill(1)
      for ( let count = 0; count < n; count ++ ) {
        product[0] *= grid[row][col + count]
        if ( row + count < grid.length ) {
          product[1] *= grid[row + count][col]
          product[2] *= grid[row + count][col + count]
          product[3] *= grid[row + count][col - count]
        }
      }
      for ( let i = 0; i < 4; i ++ ) {
        if ( product[i] > max ) {
          max = product[i]
        }
      }
    }
  }

  return max
}

module.exports = largestProductInAGrid
