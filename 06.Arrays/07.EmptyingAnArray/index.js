let numbers = [1, 2, 3, 4];
let another = numbers;

//Solution 1  - Recommended if you have single reference to this Array
// numbers = [];

// Solution 2 - Mostly RECOMMENDED  
numbers.length = 0;

// Solution 3 - Is not recommended, is also as noisy as Solution 4
// numbers.splice(0, numbers.length);

// Solution 4 - Is not recommended, because if you're dealing with large array, there's going to be performanve cost
// while (numbers.length > 0) {
//   numbers.pop();
// }

console.log(numbers);
console.log(another);
