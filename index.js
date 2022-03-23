// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//1. Simple function creation
function naseeb() {
  console.log('hey this is naseeb');
}
naseeb();

//2. function expression
const naseebfun = function () {
  console.log('this is my first functionc expression');
};

naseebfun();

//3. arrow function
const fname = () => {
  console.log('This is arrow function');
};
fname();

//4. Example of all practice exams
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 2));

const sum2 = function (num1, num2) {
  return num1 + num2;
};

console.log(sum2(4, 4));

const sum3 = (num1, num2) => {
  return num1 + num2;
};

console.log(sum3(8, 8));
