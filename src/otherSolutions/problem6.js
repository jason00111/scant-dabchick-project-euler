const sumSquareDifference2 = n => {
  const sum = n * ( n + 1 ) / 2
  const sum_sq = ( 2 * n + 1 ) * ( n + 1 ) * n / 6
  return sum * sum - sum_sq
}

const sumSquareDifference3 = limit => {
  function squareSum(limit) {
      var i, s = 1,
          e = Math.log(limit) / Math.LN10;
      // special case: limit is a power of 10
      if (e - (e << 0) === 0) {
          s = limit * (limit >> 1) + (limit >> 1);
      }
      else {
          for (i = 2; i <= limit; i += 1) {
              s += i;
          }
      }
      return s * s;
  }

  function sumSquare(limit) {
      var i, s = 1;
      for (i = 2; i <= limit; i += 1) {
          s += i * i;
      }
      return s;
  }

  return squareSum(limit) - sumSquare(limit);
}


module.exports = {sumSquareDifference2, sumSquareDifference3}
