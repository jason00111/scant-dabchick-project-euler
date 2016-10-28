

const longestCollatzSequence2 = num => {
  function even(n) {
      return n/2;
  }

  function odd(n) {
      return 3*n + 1;
  }

  function collatz(n) {
      var a = [n];
      while ( n != 1 ) {
          if ( n % 2 == 0 ) {
              n = even(n);
          } else {
              n = odd(n);
          }
          a.push(n);
      }
      return a;
  }

  var maxLen = 0;
  var f = new Array;
  var b = new Array;
  var l;

  for (var i=1; i < num; i++){
      b = collatz(i);
      l = b.length;
      if ( l > maxLen ) {
          maxLen = l;
          f = b
      }
  }

  return f[0]
}

const lengthOfCollatzSequence = n => {
  let count = 0
  while ( n !== 1 ) {
    if ( n % 2 === 0 ) n = n / 2
    else n = 3 * n + 1
    count++
  }
  return count + 1
}

const longestCollatzSequence3 = n => {
  let max = 0, maxStartNum, curLength
  for ( let i = 1; i < n; i++ ) {
    curLength = lengthOfCollatzSequence(i)
    if ( curLength > max ) {
      max = curLength
      maxStartNum = i
    }
  }
  return maxStartNum
}

module.exports = {longestCollatzSequence2, longestCollatzSequence3}
