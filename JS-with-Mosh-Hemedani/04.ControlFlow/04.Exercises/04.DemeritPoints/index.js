// Speed limit 70
// For every 5 kilometers above the seed limit they're going to get 1 point.  5 -> 1 point
// 12 points -> licence suspended
checkSpeed(74);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("OK");
//   } else {
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) {
//       console.log("Licence Suspended");
//     } else console.log("Points " + points);
//   }
// }

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log("Licence Suspended");
  } else console.log("Points " + points);
}
