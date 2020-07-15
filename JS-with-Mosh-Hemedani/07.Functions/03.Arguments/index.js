function sum(a, b) {
  let total = 0;
  /*
We can use FOR OF loops, on arrays, but technically this loop 
can be used on any object that has an iterator.
So the plain objects that we create with the object literal syntax,
they don't have an iterator, but this particular object as you can see,
here we have symbol.iterator. 
That means this object has an iterator so we can use for loop, to iterate this object. 
*/

  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
