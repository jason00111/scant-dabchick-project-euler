const smallestMultiple = n => {
  for (let i = n; ; i++) {
    for (let j = n; j > 1; j--) {
      if ( i % j !== 0 ) {
        break
      } else if ( j === 2 ) {
        return i
      }
    }
  }
}

module.exports = smallestMultiple
