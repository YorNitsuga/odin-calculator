function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let prevScreen = document.querySelector('.previous');
let currScreen = document.querySelector('.current');

function clearDisplay() {
    prevScreen.textContent = '';
    currScreen.textContent = '';
}

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber) {
    
}