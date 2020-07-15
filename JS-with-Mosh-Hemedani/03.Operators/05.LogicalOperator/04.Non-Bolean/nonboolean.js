// So here is the first thing you need to realize,
// the result of a logical expression is not necessarily a true or false.
// That depends on the value of the operance we have.

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN (Not a Number)

// Anything that is not Falsy -> Truthy 

// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);