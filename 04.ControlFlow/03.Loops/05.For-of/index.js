// For In Loop
// We use the "For in" loop to iterate over the properties of an object.
const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

// For Of Loop
// We use the "For Of" loop to iterate over the elements or items in an Array.
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
