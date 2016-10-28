


const highlyDivisibleTriangleNumber2 = maxDiv => {
  let tri = 1
  let increment = 1
  let numDiv = 0
  while ( numDiv <= maxDiv ) {
    numDiv = 0
    increment++
    tri += increment
    let sqrtTri = Math.floor( Math.sqrt(tri) )
    for ( let i = 1; i <= sqrtTri; i++ ) {
      if ( tri % i === 0 ) numDiv += 2
    }
    if ( tri === sqrtTri * sqrtTri ) numDiv--
  }
  return tri
}

const highlyDivisibleTriangleNumber3 = maxDiv => {
  function triNum(n) {
      var sum = 0;
      for(var i = 1; i <= n; i++) {
          sum += i
      }

      return sum;
  }

  function factors(n) {
      if ( n == 1 ) return [1];

      var arr = new Array;
      var i = 1;
      var max = n;

      while (i < max) {
          if ( n % i == 0 ) {
              arr.push(i);

              if ( i != n / i ) {
                  arr.push(n/i);
              }
              max = n / i;
          }
          i++
      }

      return arr.sort(function(a,b) { return a-b; });
  }

  var i = 1;
  while (factors(triNum(i)).length < maxDiv) {
      i++
  }

  return triNum(i)
}

module.exports = {highlyDivisibleTriangleNumber2, highlyDivisibleTriangleNumber3}
