function start() {
  for (let i = 0; i < 5; i++) {
    if (true) {
      var color = "red";
    }
    /* used var, color is accessible anywhere in this function.
    But if we replace var with let, you get an error, 
    because color is not accessible here.
    */
    /*Avoid using the var keyword, because it creates variables
     that are function scope, not block scope.
     */
  }

  console.log(color);
}

start();
