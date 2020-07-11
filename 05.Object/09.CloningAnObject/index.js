const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};
// Version 1
// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }

// Version 2
// const another = Object.assign({
//     color: "Yellow"
// }, circle);

// Version 3 SPREAD OPERATOR 
const another = {...circle}
console.log(another);
