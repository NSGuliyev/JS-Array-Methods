// Factory function
function createPerson(firstName, lastName, age, occuoation, address, welth) {
  return {
    firstName,
    lastName,
    age,
    occuoation,
    address,
    welth,
  };
}

const person1 = createPerson(
  "Nasimi",
  "Guliyev",
  32,
  "Engineer",
  "520 W Franklin",
  "$ 75.000.000.000,00"
);
console.table(person1);

// Constructor function
function Person(firstName, lastName, age, occuoation, address, welth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.occuoation = occuoation;
  this.address = address;
  this.welth = welth;
}

// When we use NEW operator 3 things happen
// 1. first creates an empty object
// 2. then it will set this to point to this object
// 3. and finally it will return that object from this function

const person2 = new Person(
  "Parvin",
  "Jahangirova",
  29,
  "Doctor",
  "520 W Franklin",
  "$ 85.000.000.000,00"
);

console.table(person2);
