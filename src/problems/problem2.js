const evenFibonacciNumbers = n => {
  let sum = 0, prev = 1, prevprev = 0, cur = 0

  while ( cur <= n ) {
    if ( cur % 2 === 0 ) {
      sum += cur
    }

    cur = prev + prevprev
    prevprev = prev
    prev = cur
  }

  return sum
}

module.exports = evenFibonacciNumbers
