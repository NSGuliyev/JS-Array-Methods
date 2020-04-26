// for (initialExpression; condition; incrementExpression)

// initialExpression - here we declare an initialized variable
// i - is short for index and is a common convention to use in for loops. This is what we call LOOP VARIABLE.

// condition - So here we want to add acondition and compare the value of i with something else.
// This loop will run as long as this condition evaluates to true.

// incrementExpression

for (let i = 1; i <= 5; i++) {
  console.log("Hello Nasimi", i);
}

for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

// Displaying ODD Numbers

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

let names = ["Nasimi", "Parvin", "Naomi", "Gulnaz", "Sabuhi"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = names.length; i >= 0; i--) {
  console.log(names[i]);
}
