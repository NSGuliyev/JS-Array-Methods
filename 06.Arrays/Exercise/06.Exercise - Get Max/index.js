const numbers = [1, 2, 3, 4, 5, 6];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  // SOLUTION FIRST

  //   let max = array[0];

  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] > max) {
  //       max = array[i];
  //     }
  //   }
  //   return max;

  // SOLUTION SECOND

  //   return array.reduce((accumulator, current) => {
  //     if (current > accumulator) {
  //       return current;
  //     }
  //     return accumulator;
  //   });

  // SECOND solution more cleaner
  return array.reduce((a, b) => (a > b ? a : b));
}
