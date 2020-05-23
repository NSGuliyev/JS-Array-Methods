/*
In JavaScript there are two ways to define a function,
we can use the FUNCTION DECLARATION syntax,
or FUNCTION EXPRESSION which basically involves
declaring variable or constant and then setting it to a function
*/ 


// Fuction Declaration
function walk() {
  console.log("Walk");
}

walk();

// Anonymous Function Expression
const run = function () {
  console.log("run");
};

let move = run;

run();
move();
