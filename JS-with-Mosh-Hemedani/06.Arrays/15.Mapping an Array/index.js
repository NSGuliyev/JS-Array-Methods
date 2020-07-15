/*
We can use the map method to map each element in an array, into something else.
In this example, we are mapping these numbers to strings,
but we can also map them to objects.
*/

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((value) => value >= 0);

const items = filtered.map(function (value) {
  return "<li>" + value + "</li>";
});

const html = "<ul>" + items.join("") + "</ul>";

console.log(filtered);
console.log(items);
console.log(html);
