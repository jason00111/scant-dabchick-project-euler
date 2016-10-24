
const multiplesOfThreeAndFive = (n) => {
  let result = 0
  for ( let i = 0; i < n; i++ ) {
    if ( i % 3  === 0 || i % 5 === 0 ) {
      result += i
    }
  }
  return result
}

module.exports = multiplesOfThreeAndFive


//Example solved using Ruby:
// class Integer
//   def sum_mod modulus
//     n = self.div modulus
//     modulus * n * (n + 1) / 2
//   end
// end
//
// num = 999
// sum = num.sum_mod(3) + num.sum_mod(5) - num.sum_mod(15)
//
// puts "Sum is #{ sum }."
