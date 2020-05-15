


function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}




const numbers = arrayFromRange(2, 6);

console.log(numbers);
