const sumDivisibleBy = (num, end) => {
  let result = 0
  for ( let i = 0; i < end; i++ ) {
    if ( i % num === 0 ) {
      result += i
    }
  }
  return result
}

const multiplesOfThreeAndFive2 = end => {
  const x = sumDivisibleBy(3, end) + sumDivisibleBy(5, end) - sumDivisibleBy(15, end)
  return x
}

const multiplesOfThreeAndFive3 = end => {
  let nr = end - 1
  let xthree = Math.floor( nr / 3 )
  let xfive = Math.floor( nr / 5 )
  let xfifteen = Math.floor( nr / 15 )
  let sum1 = 3 * xthree * ( xthree + 1 )
  let sum2 = 5 * xfive * ( xfive + 1 )
  let sum3 = 15 * xfifteen * ( xfifteen + 1 )
  let sum = ( sum1 + sum2 - sum3 ) / 2

  return sum
}

module.exports = {multiplesOfThreeAndFive2, multiplesOfThreeAndFive3}
