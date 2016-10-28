const maximumPathSum = rawTriangleString => {
  let max
  let triangleArray = rawTriangleString.split('\n')
      .map( elem => elem.split(' ').map( numStr => Number(numStr) ))

  for ( let i = triangleArray.length - 2; i >= 0; i-- ) {
    triangleArray[i] = triangleArray[i].map( (elem, j) => {
      max = triangleArray[ i + 1 ][ j ]
      if ( triangleArray[ i + 1 ][ j + 1 ] > max ) {
        max = triangleArray[ i + 1 ][ j + 1 ]
      }
      return elem + max
    })
  }

  return triangleArray[0][0]
}

module.exports = maximumPathSum
