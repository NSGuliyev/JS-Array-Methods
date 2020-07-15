const numbers = [3, 4];

// End
numbers.push(5, 6, 7, 8);
console.log(numbers);

// Beginning
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(8, 0, 9, 10 );
console.log(numbers)

numbers.splice