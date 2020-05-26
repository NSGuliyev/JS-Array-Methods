const movies = [
  { title: "a", year: 2018, raiting: 4.5 },
  { title: "b", year: 2018, raiting: 4.7 },
  { title: "c", year: 2018, raiting: 3 },
  { title: "d", year: 2017, raiting: 4.5 },
];

// All the movies in 2018 with raitin grater than 4
// Sort them by the raiting
// Decending order
// Pick Titlr property display it on the console

const titles = movies
  .filter((m) => m.year === 2018 && m.raiting >= 4)
  .sort((a, b) => {a.raiting - b.raiting})
  .reverse()
  .map((m) => m.title);

console.log(titles);
  