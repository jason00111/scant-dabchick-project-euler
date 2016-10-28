const largestProductInAGrid2 = ( grid, n ) => {
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

const largestProductInAGrid3 = ( GRID, NUM ) => {
  var product = 0;
  for(var i = NUM - 1; i < (GRID.length - NUM); i++) {
    for(var k = NUM - 1; k < (GRID.length - NUM); k++) {
        product = Math.max(
            product,

            // TOP ROW
            (GRID[i - 3][k - 3] * GRID[i - 2][k - 2] * GRID[i - 1][k - 1] * GRID[i][k]), // LT
            (GRID[i - 3][k] * GRID[i - 2][k] * GRID[i - 1][k] * GRID[i][k]), // MT
            (GRID[i - 3][k + 3] * GRID[i - 2][k + 2] * GRID[i - 1][k + 1] * GRID[i][k]), // RT

            // MIDDLE ROW
            (GRID[i][k - 3] * GRID[i][k - 2] * GRID[i][k - 1] * GRID[i][k]), // LM
            (GRID[i][k + 3] * GRID[i][k + 2] * GRID[i][k + 1] * GRID[i][k]), // RM

            // BOTTOM ROW
            (GRID[i + 3][k - 3] * GRID[i + 2][k - 2] * GRID[i + 1][k + 1] * GRID[i][k]), // LB
            (GRID[i + 3][k] * GRID[i + 2][k] * GRID[i + 1][k] * GRID[i][k]), // MB
            (GRID[i + 3][k + 3] * GRID[i + 2][k + 2] * GRID[i + 1][k + 1] * GRID[i][k]) // RB
        );
    }
  }
  return product
}

module.exports = {largestProductInAGrid2, largestProductInAGrid3}
