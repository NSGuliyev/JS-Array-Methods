const numbers = [1, 2, 3, 4, 5];

for (number of numbers) {
  console.log(number);
}
console.log("*********************************");
numbers.forEach((number, index) => console.log(index, number));

console.log("*********************************");

// for in loop usually used for Objects
for (let index in numbers) {
  console.log(index, numbers[index]);
}
