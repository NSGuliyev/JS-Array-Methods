const numbers = [1, 2, -1, 3, 4, 5];

/* 
every() checks to see if every element 
in a given Array matches the given criteria
*/
const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

/*
some() checks to see if we have at least one element
in a given Array that matches the given criteria
*/
const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
