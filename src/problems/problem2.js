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


// Example 1
// limit=4000000
// sum=0
// a=1
// b=1
// c=a+b
// while c<limit
//  sum=sum+c
//  a=b+c
//  b=c+a
//  c=a+b
// output sum

// Example 2
// const evenFibonacciNumbers = n => {
//   const E = j => {
//     if ( j === 1 ) return 2
//     if ( j === 2 ) return 8
//     return 4 * E( j - 1 ) + E( j - 2 )
//   }
//
//   let sum = 0
//   for (let i = 1; E(i) <= n; i++) {
//     sum += E(i)
//   }
//
//   return sum
// }
