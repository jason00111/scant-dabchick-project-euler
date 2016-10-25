const specialPythagoreanTriplet = n => {
  for ( let a = 1; a < n; a++ ) {
    for ( let b = a; b < n; b++ ) {
      for ( let c = b; c < n; c++ ) {
        if ( a * a + b * b === c * c ) {
          if ( a + b + c === n ) {
            return a * b * c
          }
        }
      }
    }
  }
  return 'not found'
}

module.exports = specialPythagoreanTriplet
