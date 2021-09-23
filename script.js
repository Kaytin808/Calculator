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
// Operate Function //
function operator (a, b, c) {
    let output = 0;
  
    if (c === '+') {
      output = a + b;
      return output;
     } else if (c === '-') {
        output = a - b;
        return output;
      } else if (c ==='/') {
        output = a / b;
        return output;
      } else {
        output = a * b;
        return output;
      }
    }
let firstInput = '';
let secondInput = '';
let currentOp = '';
const results_div = document.querySelector('.screen')
const numberBtns = document.querySelectorAll('.numbers')
numberBtns.forEach((numbers) => {
numbers.addEventListener('click', () => {
  if (currentOp === '') {
    firstInput += numbers.value;
    results_div.innerHTML= firstInput;
  } else {
    secondInput += numbers.value;
    results_div.innerHTML= firstInput + currentOp + secondInput
  }
});
});
 // listeners for operators //
const operatorBtns = document.querySelectorAll('.operator');
// operator buttons //
operatorBtns.forEach((operators) => {
  operators.addEventListener('click', () => {
currentOp += operators.value;
results_div.innerHTML= firstInput + currentOp
  })
})
// equals //
const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
  var results = operator(parseInt(firstInput),parseInt(secondInput),(currentOp))
  results_div.innerHTML= results;
})
// Clear button //
const clearBtn = document.querySelector('.c');
clearBtn.addEventListener('click', () => {
  results_div.innerHTML = 0;
  firstInput = '';
  secondInput ='';
  currentOp ='';
})