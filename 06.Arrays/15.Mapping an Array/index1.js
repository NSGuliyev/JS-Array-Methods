const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((value) => value >= 0);
/*

We've mapped each number to an object with a value property


const items = filtered.map(function (value) {
    const obj = { value: value }
    return obj
});

console.log(items);

*/

const items = filtered.map((value) => ({ value: value }));

console.log(items);
