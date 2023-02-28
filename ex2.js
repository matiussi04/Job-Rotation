function isFibonacciNumber(number) {
  const fibonacci = [0, 1];

  if (number === 0) return true;

  while (number >= fibonacci[fibonacci.length - 1]) {
    if (fibonacci[fibonacci.length - 1] === number) {
      return true;
    }

    fibonacci.push(
      fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]
    );
  }

  return false;
}

console.log(isFibonacciNumber(13));
console.log(isFibonacciNumber(805));
console.log(isFibonacciNumber(34));
console.log(isFibonacciNumber(88));
