const fibonacci = m => {
  if (m==1) return 1
  if (m==2) return 2
  return fibonacci(m-1) + fibonacci(m-2)
}

const evenFibonacciNumbers2 = n => {
  let sum = 0, fib = 1
  for (let i = 1; fib <= 4000000; i++) {
    fib = fibonacci(i)
    if ( fib % 2 === 0 ) {
      sum += fib
    }
  }
  return sum
}

const evenFibonacciNumbers3 = n => {
  let sum = 0
  let a = 1
  let b = 1
  let c = a + b
  while ( c < n ) {
    sum += c
    a = b + c
    b = c + a
    c = a + b
  }
  return sum
}

module.exports = {evenFibonacciNumbers2, evenFibonacciNumbers3}
