// Hour
// If hour is between 6 am and 12 pm : Good morning!
// if it is between 12 pm and 6pm: Good afternon!
// Otherwise: Good eveninig!

let hour = 11;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternon!");
} else {
  console.log("Good eveninig!");
}

// Another Example
let point = 101;

if (point > 100) {
  console.log("Costumer status is GOLD");
} else {
  console.log("Costumer status is SILVER");
}
