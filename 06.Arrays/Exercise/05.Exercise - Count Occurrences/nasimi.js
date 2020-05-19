const numbers = [1, 2, 1, 3, 4, 1, 2, 1, 2];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  let count = 0;
  numbers.filter(function find(number) {
    if (searchElement === number) {
      count++;
    }
  });
  return count;
}
