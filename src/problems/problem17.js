const numberWords = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '0': ''
}

const numberLetterCount = n => {

  if ( n < 20 ) {
    console.log( numberWords[n] )
    return numberWords[n].length
  }

  if ( n < 100 ) {
    let a = numberWords[ n.toString()[0] * 10 ]
    let b = numberWords[ n.toString()[1] ]
    console.log( a, b )
    return a.length + b.length
  }

  if ( n < 1000 ) {
    let a = numberWords[ n.toString()[0] ]
    let b = ''
    let c = ''

    if ( n.toString()[1] < 2 ) {
      b = numberWords[ (n % 100).toString() ]
      if ( b === '' ) {
        console.log( a, 'hundred' )
        return a.length + 7
      } else {
        console.log ( a, 'hundred and', b )
        return a.length + b.length + 10
      }
    } else {
      b = numberWords[ n.toString()[1] * 10 ]
      c = numberWords[ n.toString()[2] ]
      console.log ( a, 'hundred and', b, c )
      return a.length + b.length + c.length + 10
    }
  }
  console.log('one thousand')
  return 'onethousand'.length

}

const sumNumberLetterCount = n => {
  let result = 0
  for ( let i = 1; i <= n; i++ ) {
    result += numberLetterCount(i)
  }

  return result
}

module.exports = {numberLetterCount, sumNumberLetterCount}
