let number = max(10, 6);

console.log(number);

// VERSION 1
// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// VERSION 2
// function max(a, b) {
//   if (a > b) return a;
//   return b;
// }

// VERSION 3
function max(a, b) {
  return a > b ? a : b;
}
