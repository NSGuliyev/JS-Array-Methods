/*
Whenever you want to give the function parameter a default value , 
make sure that, that parameter is the last parameter in the list,
or give all the parameters after that a default value.
*/


function interest(principal, rate = 3.5, years = 5) {
  /*
This is not cleaner way to set default value 
rate = rate || 3.5;
years = years || 5;
*/

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));
