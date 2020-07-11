let x = 10;
let y = 3;

// Addition Operator
console.log(x + y);
console.log("**********************");

// Subtraction Operator
console.log(x - y);
console.log("**********************");

// Multiplication Operator
console.log(x * y);
console.log("**********************");

// Division Operator
console.log(x / y);
console.log("**********************");

// Remainder of Division Operator
console.log(x % y);
console.log("**********************");

// Exponentiation Operator
// That is x, to the power of y
console.log(x ** y);
console.log("**********************");

function adder(x, y) {
  console.log(x + y);
  return x * y;
}

const show = adder(5, 5);
console.log(show)
