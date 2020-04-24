let fistName = "Nasimi", lastName = "Guliyev";
console.log("My full name is " + fistName + " " + lastName);

let wifeFirstName = "Parvin";

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const pi = 3.14;
console.log(pi);

let name = "Parvin"; // String Literal
let age = 28; // Number Literal
let isApproved = true; // Boolean Literal
let middleName = undefined;
let secondName = null;

// New Object
let man = {
  firstName: "Nasimi",
  lastName: "Guliyev",
  age: 32,
  gender: "male",
};
// Dot notation
man.firstName = "Parvin";

// Bracket notation
man["lastName"] = "Jahangirova";

console.log(man);
console.log(man.firstName);
console.log(man.lastName);

// Arrays
let secelectedColors = ["green", "blue", "pink", "white"];
secelectedColors[4] = "red";
secelectedColors[5] = "Nasimi";
console.log(secelectedColors);
console.log(secelectedColors[5]);
console.log(secelectedColors.length);

//Function here is  Performing a task
function greet(name) {
  console.log("Welcome to Azerbaijan " + name);
}

greet("Nasimi");
greet("Naomi");

//Function here is Calculate a value
function calculate(a, b) {
  return a + b;
}

console.log(calculate(26, 14));

function square(number) {
  console.log(number * number);
}

square(4);
