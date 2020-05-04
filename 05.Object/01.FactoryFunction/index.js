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


const person2 = createPerson(
    "Parvin",
    "Jahangirova",
    29,
    "Doctor",
    "520 W Franklin",
    "$ 85.000.000.000,00"
  );
  console.table(person2);


