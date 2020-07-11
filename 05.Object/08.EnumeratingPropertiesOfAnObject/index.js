const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};
// For in loop we use for objects
for (let key in circle) {
  console.log(key, circle[key]);
}
// For of loop we use for Array
for (let key of Object.keys(circle)) {
  console.log(key);
}

for (let entry of Object.entries(circle)) {
  console.log(entry);
}
if ("radius" in circle) console.log("Yes");
