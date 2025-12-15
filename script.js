function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Create variables
let number1 = "";
let operator = "";
let number2 = "";
let result = 0;
let lastButton = "";
let container = document.querySelector('.container');
let display = document.querySelector('#display');
display.textContent = "0";

function operate(oper, n1, n2) {
    if (oper === "+") {
        return add(n1, n2);
    } else if (oper === "-") {
        return subtract(n1, n2);
    } else if (oper === "*") {
        return multiply(n1, n2);
    } else if (oper === "/") {
        return divide(n1, n2);
    }
}

// Create buttons variables
let btnClear = document.querySelector('#btnClear');
let btnOne = document.querySelector('#btnOne');
let btnTwo = document.querySelector('#btnTwo');
let btnThree = document.querySelector('#btnThree');
let btnFour = document.querySelector('#btnFour');
let btnFive = document.querySelector('#btnFive');
let btnSix = document.querySelector('#btnSix');
let btnSeven = document.querySelector('#btnSeven');
let btnEight = document.querySelector('#btnEight');
let btnNine = document.querySelector('#btnNine');
let btnZero = document.querySelector('#btnZero');
let btnAdd = document.querySelector('#btnAdd');
let btnSubtract = document.querySelector('#btnSubtract');
let btnMultiply = document.querySelector('#btnMultiply');
let btnDivide = document.querySelector('#btnDivide');
let btnEqual = document.querySelector('#btnEqual');

// Create function to display the numbers on the screen
function getNumber(e) {
    e.preventDefault();
    if (display.textContent === "0" || 
        lastButton === "+" || lastButton === "-" || lastButton === "*" || lastButton === "/" || lastButton === "=") {
        display.textContent = `${e.target.textContent}`;
    } else {
        console.log(number1, number2, operator, e.target.textContent);
        display.textContent += `${e.target.textContent}`
    } lastButton = e.target.textContent;
}

btnOne.addEventListener('click', getNumber);
btnTwo.addEventListener('click', getNumber);
btnThree.addEventListener('click', getNumber);
btnFour.addEventListener('click', getNumber);
btnFive.addEventListener('click', getNumber);
btnSix.addEventListener('click', getNumber);
btnSeven.addEventListener('click', getNumber);
btnEight.addEventListener('click', getNumber);
btnNine.addEventListener('click', getNumber);
btnZero.addEventListener('click', getNumber);

btnClear.addEventListener('click', e => {
    e.preventDefault();
    display.textContent = "0";
    number1 = "";
    number2 = "";
    operator = "";
    result = "";
});

btnAdd.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 1000);
    if (number1 === "") {
        number1 = Number(display.textContent);
        operator = "+";
        display.textContent = operator;
    } else {
        number2 = Number(display.textContent);
        if (number2 === 0 && operator === "/") {
            alert("Error!")
        } else {
            result = operate(operator, number1, number2);
            display.textContent = result;
            number1 = result;
            number2 = "";
            operator = "+";
        }
    } lastButton = "+";
})

btnSubtract.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 1000);
    if (number1 === "") {
        number1 = Number(display.textContent);
        operator = "-";
        display.textContent = operator;
    } else {
        number2 = Number(display.textContent);
        if (number2 === 0 && operator === "/") {
            alert("Error!")
        } else {
            result = operate(operator, number1, number2);
            display.textContent = result;
            number1 = result;
            number2 = "";
            operator = "-";
        }
    } lastButton = "-";
})

btnMultiply.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 1000);
    if (number1 === "") {
        number1 = Number(display.textContent);
        operator = "*";
        display.textContent = operator;
    } else {
        number2 = Number(display.textContent);
        if (number2 === 0 && operator === "/") {
            alert("Error!")
        }
        result = operate(operator, number1, number2);
        display.textContent = result;
        number1 = result;
        number2 = "";
        operator = "*";
        } lastButton = "*";
    })

btnDivide.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 1000);
    if (number1 === "") {
        number1 = Number(display.textContent);
        operator = "/";
        display.textContent = operator;
    } else {
        number2 = Number(display.textContent);
        if (number2 === 0 && operator === "/") {
            alert("Error!")
        } else {
            result = operate(operator, number1, number2);
            display.textContent = result;
            number1 = result;
            number2 = "";
            operator = "/";
        }
    } lastButton = "/";
});

btnEqual.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 1000);
    number2 = Number(display.textContent);
    if (number2 === 0) {
        alert("Error!")
    } else {
        result = operate(operator, number1, number2);
        display.textContent = result;
        number1 = "";
        number2 = "";
        operator = "";
        result = "";
        lastButton = "=";
    }
})