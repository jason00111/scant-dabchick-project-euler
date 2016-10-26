const add = (a, b) => {
  let smallEvilArray = [a, b]
  let result = ''
  let carry = 0
  let intermediateResult = 0
  for ( let i = smallEvilArray[0].length - 1; i >= 0; i-- ) {
    intermediateResult = 0
    smallEvilArray.forEach( e => {
      intermediateResult += Number( e[i] )
    })
    intermediateResult += carry
    result = ( intermediateResult % 10 ).toString() + result
    carry = Math.floor( intermediateResult / 10 )
  }
  if ( carry !== 0 ) {
    result = ( carry ).toString() + result
  }
  return result
}

const powerDigitSum = n => {
  let num = '1', result = 0
  for ( let i = 0; i < n; i++ ) {
    num = add( num, num )
  }
  for ( let i = 0; i < num.length; i++ ) {
    result += Number(num[i])
  }
  return result
}

module.exports = {powerDigitSum, add}
