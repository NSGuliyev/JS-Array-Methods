const circle = {
  radius: 1,
};
circle.color = "yellow";
circle.draw = function () {};

delete circle.color;
delete circle.draw;

console.log(circle);

// Every Object has a constructor property, and that references a function that was used  to create that object 
