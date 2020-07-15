const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const copy = combined.slice()
console.log(copy)

const split = combined.slice(2)
console.log(split)

const slice = combined.slice(2, 4);
console.log(slice);
