const displayResult = document.querySelector('.display-result')
var result = document.createElement('p');
displayResult.appendChild(result);
result.style.padding = '15px';
result.style.fontSize = '20px';
var newResult= '';
var calcResult = '';

// numbers
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');


//special characters
const ac = document.querySelector('#ac');
const c = document.querySelector('#c');
const mipl = document.querySelector('#mipl');
const multiply = document.querySelector('#multiply');
const division = document.querySelector('#division');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');


// event listeners = click
one.addEventListener('click', dispOne);
two.addEventListener('click', dispTwo);
three.addEventListener('click', dispThree);
four.addEventListener('click', dispFour);
five.addEventListener('click', dispFive);
six.addEventListener('click', dispSix);
seven.addEventListener('click', dispSeven);
eight.addEventListener('click', dispEight);
nine.addEventListener('click', dispNine);
zero.addEventListener('click', dispZero);


//functions for event listeners(numbers)
function dispOne(){
  newResult += '1';
  result.innerText = newResult;
}
function dispTwo(){
  newResult += '2';
  result.innerText = newResult;
}
function dispThree(){
  newResult += '3';
  result.innerText = newResult;
}
function dispFour(){
  newResult += '4';
  result.innerText = newResult;
}
function dispFive(){
  newResult += '5';
  result.innerText = newResult;
}
function dispSix(){
  newResult += '6';
  result.innerText = newResult;
}
function dispSeven(){
  newResult += '7';
  result.innerText = newResult;
}
function dispEight(){
  newResult += '8';
  result.innerText = newResult;
}
function dispNine(){
  newResult += '9';
  result.innerText = newResult;
}
function dispZero(){
  newResult += '0';
  result.innerText = newResult;
}
//event for special
ac.addEventListener('click', dispAc);
c.addEventListener('click', dispC);
multiply.addEventListener('click', dispMultiply);
division.addEventListener('click', dispDivision);
subtract.addEventListener('click', dispSubtract);
dot.addEventListener('click', dispDot);
add.addEventListener('click', dispAdd);
equal.addEventListener('click', dispResult);

// functions for event listeners(special)
function dispAc(){
  result.innerText = '';
  newResult = '';
  calcResult = '';
}
function dispC(){
  newResult = newResult.slice(0, -1);
  result.innerText = newResult;
}
function dispMultiply(){
  newResult += '*';
  result.innerText = newResult;
}
function dispDivision(){
  newResult += '/';
  result.innerText = newResult;
}
function dispAdd(){
  newResult += '+';
  result.innerText = newResult;
}
function dispSubtract(){
  newResult += '-';
  result.innerText = newResult;
}
function dispDot(){
  newResult += '.';
  result.innerText = newResult;
}
function dispResult(){
  calcResult = eval(newResult);
  result.innerText = calcResult;
  // newResult = '';
}