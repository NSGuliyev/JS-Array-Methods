const isActive = true;
const name = "";
if (name) console.log("Hello World");

// Falsy
// undefined
// null
// ''
// false
// 0
// NaN
const array = [0, undefined, null, "", false, NaN, 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) 
  if (value) count++;
  return count;
}
