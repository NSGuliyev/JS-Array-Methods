const numbers = [1, 2, 3, 4, 1, 2, 1];

const count = countOccurrences(numbers, 2);

console.log(count);

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    console.log(accumulator, current, searchElement);
    const occurrences = (current === searchElement) ? 1 : 0;
    return accumulator + occurrences;
  }, 0);
}
