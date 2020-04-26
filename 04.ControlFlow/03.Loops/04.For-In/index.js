// We use For In loop iterate over the properties of an object. (and an Array)
// We have an object like person, with two properties, name and age

const person = {
  name: "Mosh",
  age: 30,
};

// In every iteration this key variable in the loop will hold the name one of properties on this person object.
// We use the bracket notation when we don't know ahead of time, at the time of wrtitng code,
// what property we're going to access. Perhaps the name of the target property is calculated at run time.
// So we add square brackets, and pass key as name of the target property.
for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);
