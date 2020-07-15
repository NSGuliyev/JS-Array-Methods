function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const another = new Circle(1);


// **********************************
const another = new Function(
  "radius",
  ` this.radius = radius;
  this.draw = function () {
    console.log("Draw");`
);

const circle = new Circle1(1);
// **********************************


// Circle1.call(window, 1);
// const another = Circle(1);
// Every object has a constructor property, and that references
// a function that was used to create that object

// Functions are OBJECTS
