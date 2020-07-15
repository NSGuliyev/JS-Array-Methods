function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Draw");
    },
  };
}

const circle = createCircle(1);
console.log(circle.constructor);

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const another = new Circle(1);
console.log(another.constructor)

// Every object has a constructor property, and that references
// a function that was used to create that object