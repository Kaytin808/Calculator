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
    // Stored variables 
var input = ''
 var result;
 var problem;
const results_div = document.querySelector('.screen')
const allBtns = document.querySelectorAll('.buttons')
// Saving first and second input
allBtns.forEach((buttons) => {
buttons.addEventListener('click', () => {
  input += buttons.value;
  if (typeof input === 'string') {
    var calculate = input.match(/\d+|[^0-9]/g)
  }
  problem = calculate;
  results_div.innerHTML=input;
})
})

// equals //
const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
  for (a=0;a < problem.length;a++) {
    if (a == 0) {
      result = parseInt(problem[a])
    } else {
      if (!isNaN(problem[a])) {
        switch (problem [a - 1]) {
        case '-':
          result -= parseInt(problem[a])
          break;
          case '+':
          result += parseInt(problem[a])
          break;
          case '*':
          result *= parseInt(problem[a])
          break;
          case '/':
          result /= parseInt(problem[a])
          break;
        }
      }
    }
  }
  results_div.innerHTML = result;
})
// Clear button //
const clearBtn = document.querySelector('.c');
clearBtn.addEventListener('click', () => {
  results_div.innerHTML = 0;
  input="";
  problem;
  currentOp ='';
})
const acBtn = document.querySelector('.ac');
acBtn.addEventListener('click', () => {
  results_div.innerHTML = 0;
  input="";
  problem;
  currentOp ='';
})