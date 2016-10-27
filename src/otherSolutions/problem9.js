
specialPythagoreanTriplet2 = perimeter => {
  for ( let a = 3; a <= (perimeter - 3) / 3; a++ ) {
    for ( let b = a + 1; b < (perimeter - a) / 2; b++) {
      let c = perimeter - a - b
      if ( c * c === a * a + b * b ) {
        return ( a * b * c )
      }
    }
  }
}

specialPythagoreanTriplet3 = perimeter => {
  var a = 1;
  var b = a + 1;
  var c;

  while (a < perimeter) {
    while (b < perimeter && b > a) {
      c = perimeter - a - b;
      if (c < b) {
        break;
      }
      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
        return a * b * c;
      }
      b++;
    }
    a++;
    b = a + 1;
  }
}

module.exports = {specialPythagoreanTriplet2, specialPythagoreanTriplet3}
