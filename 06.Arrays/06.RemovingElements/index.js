const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers)

// Add something at the end of an array
numbers.push();

// Add something at the beginning of an array
numbers.unshift();

// Add something somewhere in the middle of an array
numbers.splice();

// Remove element from the end of an array
const last = numbers.pop();
console.log(`${last} is removed from an array with pop() method`);
console.log(numbers);

// Remove element from the beginnig of an array
const first = numbers.shift();
console.log(`${first} is removed from an array with shift() method`);
console.log(numbers)

// Remove element from the middle of an array
const middle = numbers.splice(4, 2)
console.log(`${middle} is removed from an array with splice() method`);
console.log(numbers) 

const randomNumber = Date.now()
console.log(randomNumber)

let yeke = 100