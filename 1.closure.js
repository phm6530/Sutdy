function outerFunction(e) {
    const outerVariable = "I am from outerFunction";
    
    function innerFunction() {      
        console.log(outerVariable);
    }
    
    return innerFunction;
  }
  const closure = outerFunction();
  closure(); 