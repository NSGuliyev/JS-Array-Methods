const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const output = except(numbers, [2, 4, 6, 8]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) {
      output.push(element);
    }
  return output;
}
