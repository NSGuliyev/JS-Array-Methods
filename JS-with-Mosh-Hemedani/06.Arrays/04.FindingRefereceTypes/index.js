const courses = [
  { id: 1, name: "a" },
  { id: 1, name: "b" },
];

// This is not the right method
console.log(courses.includes({ id: 1, name: "a" }));

// Find method
// Predicate = Call Back function

const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);
// **********************************************

const course1 = courses.find(function (course) {
  return course.name === "xyz";
});

console.log(`The result is ${course1}`);
//**********************************************

const course2 = courses.findIndex (function (course) {
  return course.name === "b";
});

console.log(course2);