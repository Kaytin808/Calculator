function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}
function operator (a, b, c) {
    let output = 0;
  
    try {
  
      switch(c) {
        case '+':
          output = a + b
          break;
  
        case '*':
          output = a * b
          break;
  
        case '-':
          output = a - b
          break;
  
       case '/': 
          if (b === 0) {
            throw "Can't divide by 0!"
          } else {
            output = a / b
          }
          break;
      }
    }
    catch(e) {
      console.log("There's an error: ", e)
    }
  
    return output;
  }