const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

/* https://www.ascii-code.com/ - list of numeric representation
 ASCII (American Standart Code Information Interchange) table */
courses.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  // a < b => -1
  // a > b => 1
  // a === b => 0

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses);
