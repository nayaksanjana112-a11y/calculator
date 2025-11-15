// ---------------- LOGIN FUNCTIONALITY ----------------
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('errorMsg');
const loginContainer = document.querySelector('.login-container');
const calculatorContainer = document.querySelector('.calculator-container');

const USERNAME = "user";
const PASSWORD = "1234";

loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if(username === USERNAME && password === PASSWORD){
        loginContainer.classList.add('d-none'); // hide login
        calculatorContainer.classList.remove('d-none'); // show calculator
    } else {
        errorMsg.style.display = "block";
    }
});

// Enter key triggers login
usernameInput.addEventListener('keypress', checkEnter);
passwordInput.addEventListener('keypress', checkEnter);
function checkEnter(e) {
    if(e.key === "Enter") loginBtn.click();
}

// ---------------- CALCULATOR FUNCTIONALITY ----------------
const display = document.getElementById('display');
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const ac = document.getElementById('ac');
const equals = document.getElementById('equals');
const decimal = document.getElementById('decimal');
const square = document.getElementById('square');
const mod = document.getElementById('mod');

let currentInput = '';
let firstNum = null;
let operator = null;
let justCalculated = false;

// Number click
nums.forEach(num => {
    num.addEventListener('click', () => {
        if (justCalculated) {
            currentInput = '';
            justCalculated = false;
        }
        currentInput += num.dataset.num;
        display.value = currentInput;
    });
});

// Decimal click
decimal.addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
});

// Operator click
operators.forEach(op => {
    op.addEventListener('click', () => {
        if (currentInput === '') return;
        if (firstNum !== null && !justCalculated) calculate();
        else firstNum = parseFloat(currentInput);
        operator = op.dataset.op;
        justCalculated = true;
    });
});

// Equals click
equals.addEventListener('click', () => {
    if(firstNum === null || operator === null || currentInput === '') return;
    calculate();
    operator = null;
    justCalculated = true;
});

// AC click
ac.addEventListener('click', () => {
    currentInput = '';
    firstNum = null;
    operator = null;
    display.value = '';
    justCalculated = false;
});

// Square click
square.addEventListener('click', () => {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) ** 2).toString();
    display.value = currentInput;
    firstNum = parseFloat(currentInput);
    justCalculated = true;
});

// Modulo click
mod.addEventListener('click', () => {
    if(currentInput === '') return;
    if(firstNum !== null && !justCalculated) calculate();
    else firstNum = parseFloat(currentInput);
    operator = '%';
    justCalculated = true;
});

// Calculate function
function calculate() {
    let secondNum = parseFloat(currentInput);
    let result;
    switch(operator){
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = secondNum === 0 ? 'Error' : firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        default: return;
    }
    display.value = result;
    currentInput = result.toString();
    firstNum = result;
}
