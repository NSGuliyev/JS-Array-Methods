// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function draw() {
    confirm.log("Draw");
  };
}
// When we use NEW operator 3 things happen
// 1. first creates an empty object 
// 2. then it will set this to point to this object
// 3. and finally it will return that object from this function
const circle = new Circle (18)
console.log(circle)
