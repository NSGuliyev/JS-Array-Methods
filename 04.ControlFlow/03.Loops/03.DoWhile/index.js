// Most of the time you will be using a FOR or WHILE loop.
// just be aware of the difference between WHILE LOOP and a DO WHILE loop

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// In While loops (i <= 5) condition is evaluated ahead of time at the begining of every iteration.

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// Do While Loop
// In contrast In Do-While loops (i <= 5) condition is evaluated at the end.
// In our While loop here if (i % 2 !== 0) console.log(i) we check to see if this is an odd-number ? it is.
// And display it on the console.
// // // // We're NOT GOING TO USE this DO-WHILE a lot in programing.
let a = 0;
do {
  if (a % 2 !== 0) console.log(a);
  a++;
} while (a <= 5);
