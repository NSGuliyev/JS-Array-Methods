const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);

// We can see with Spread Operator, We have a better visualization of how these arrays are combined.
const combined = [...first, "a", ...second, "b"];
console.log(combined);

// const copy = combined.slice();
const copy = [...combined]
console.log(copy)
