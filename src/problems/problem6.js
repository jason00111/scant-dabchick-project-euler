const sumSquareDifference = n => {
  let sumOfSquares = 0
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sumOfSquares += i * i
    sum += i
  }
  return sum * sum - sumOfSquares
}


module.exports = sumSquareDifference
