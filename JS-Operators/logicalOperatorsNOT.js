// Logical NOT (!)
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible For Loan',eligibleForLoan);
console.log("***********************************");

let applicationRefused = !eligibleForLoan
console.log('Application is Refused',applicationRefused)