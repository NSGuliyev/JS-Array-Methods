const now = new Date();
console.log(now);

const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 23, 9, 00);

now.setFullYear(2017);
console.log(now);

let h = new Date().getHours();
let m = new Date().getMinutes();

console.log(`${h} ${m}`);
