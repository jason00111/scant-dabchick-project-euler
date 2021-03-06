let collatzLengths = []

const lengthOfCollatzSequence = n => {
  const nOrigin = n
  let count = 0
  while ( n !== 1 ) {
    if ( collatzLengths[n] ) {
      collatzLengths[nOrigin] = count + collatzLengths[n]
      return count + collatzLengths[n]
    }
    if ( n % 2 === 0 ) n = n / 2
    else n = 3 * n + 1
    count++
  }
  collatzLengths[nOrigin] = count + 1
  return count + 1
}

const longestCollatzSequence = n => {
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

module.exports = {longestCollatzSequence, lengthOfCollatzSequence}
