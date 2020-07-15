const numbers = [1, -1, 2, 3];

let sum = 0;

for (let n of numbers) {
  sum += n;
}
console.log(sum);



/*
a = 0, c = 1  => a = 1
a = 1, c = -1 => a = 0
a = 0, c = 2  => a = 2
a = 2, c = 3  => a = 5
*/
const anotherSum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(`The result of reduce() method is ${anotherSum}`);

/*
We can exclude the initilization of the accumulator,
and with this accumulator will be set to the first element a = 1, c = -1 => a = 0

a = 0, c = 2  => a = 2
a = 2, c = 3  => a = 5
*/
const cleanerSum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(`The result of reduce() method with more cleaner code is ${cleanerSum}`);
