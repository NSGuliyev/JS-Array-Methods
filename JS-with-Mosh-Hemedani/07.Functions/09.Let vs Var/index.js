function start() {
    /*
    lets change let with var 
    it turns out that i accesible outside of this for block
    */ 
    
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

start();

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped
