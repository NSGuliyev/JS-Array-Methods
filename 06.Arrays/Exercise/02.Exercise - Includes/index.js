const numbers = [1, 2, 3, 4, 5];

/* Nasimi's solution

function includesd(array, searchElements) {
  for (let i = 0; i < array.length; i++) {
    return array.includes(searchElements);
  }
}
*/

// Mosh's solution

function includesd(array, searchElements) {
  for (let element of array) {
    if (element === searchElements) {
      return true;
    }
  }
  return false;
}

console.log(includesd(numbers, 6));
