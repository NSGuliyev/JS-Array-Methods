const courses = [
  { id: 1, name: "a" },
  { id: 1, name: "b" },
];

const course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);

const courseArrow = courses.find(course => course.name === "b");
console.log(courseArrow)