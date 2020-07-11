// Value Types or Primitives
// Number / String / Boolean /Symbol / undefined / null
// **************************************
//  Refernce Types
// Obect / Function / Array

// Hint ----- Function and Array also are Object

// let x = 10;
// let y = x;

// x = 20;
// console.log("X", x);
// console.log("Y", y);

let x = { value: 10 };
let y = x;

x.value = 20;

console.log("X", x);
console.log("Y", y);
// When we use an object , that object is not stored in this variable.
// That object is stored somewhere else in the memory,
// and the address of that memory location is stored inside that memory variable.
// So when we copy x into y it is the address or the reference that is copied.
// In other words, both x and y are pointing to the same object in memory.
// And when we modify each object using x or y our change immediately visible to other variable
//***************************************************************************************
// PRIMITIVES ARE COPIED BY THEIR VALUE
// OBJECTS ARE COPIED BY THEIR REFERENCE

let number = 10;
function increment(number) {
  number++;
}

increment(number);
console.log(number++);
console.log(number);
