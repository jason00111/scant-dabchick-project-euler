const smallestMultiple = n => {
  for (let i = 1; ; i++) {
    for (let j = 1; j <= n; j++) {
      if ( i % j !== 0 ) {
        break
      } else if ( j === n ) {
        return i
      }
    }
  }
}

module.exports = smallestMultiple
