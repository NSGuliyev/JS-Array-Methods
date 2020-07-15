// Object are collection of key value pairs,
// so if you have properties that are highly related,
// we want to encapsulate them inside of an object.

let radius = 1;
let x = 1;
let y = 1;

// Now what you see here is what we refer to as Object oriented style programing.
// Object Oriented Programing, also obreviated as OOP
// OOP is basicaly a stylee of programming where we see a program as collection of objects
// that talk to each other to perform some functionality.
// In OOP terms, if a funtion is a part of an object, we call the function a method.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};

// So here more accurately instead of saying  we're calling the draw function of the circle object,
// we say we're calling the draw method of the circle object.

circle.draw();
