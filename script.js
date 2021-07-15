// All operator functions //

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
  
        case 'x':
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
// Empty variables for saving number inputs //
  const results_div = document.querySelector('.screen')
  var firstNum = "";
  var secondNum = "";
var storedNum ="";
 var currentOp = "";
const numbers = document.querySelectorAll(".numbers")
// add a click listener to every butttons on the calculator //
numbers.forEach((numbers) => {
  numbers.addEventListener('click', function (){
    // When clicked, stored into first number and saved into stored number //
    firstNum += numbers.value;
    // Whatever you clicked will show up on the calculator screen //
    results_div.innerHTML = firstNum;
    // to test if its working
  })
})
// making a button listener for operators
const buttons = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.c');

clearBtn.addEventListener('click', function(){
  storedNum = "";
  firstNum ="";
  secondNum = "";
  currentOp ="";
  results_div.innerHTML=0;
 })
buttons.forEach((buttons) => {
  buttons.addEventListener('click', function() {
   // when number is clicked, saves that first number //
    storedNum = firstNum;
    // saves current Operator //
    currentOp += buttons.value;
    // Saves a Second number and stores it for later calculation //
    numbers.forEach((numbers) => {
      numbers.addEventListener('click', function(){
        secondNum += numbers.value;
        results_div.innerHTML = secondNum;
        // Clear button //
        
      })
    })
  })
})
// invokes the operator function when equals button is clicked //
const equals = document.querySelector('.equals');
equals.addEventListener('click', function(){
var results = operator(parseFloat(storedNum), parseFloat(secondNum),(currentOp))
  results_div.innerHTML = results;
})

// Make Clear button,
// When Clear button is pressed, should reset everything back
// Make event listener click when clear button pressed
// Once it hears the click, make a function that resets everything back to 0