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

// Conditions to evaluate numbers
// let isDisplayEmpty = display.textContent === "0";
// let isDisplayNumber1 = display.textContent.includes(`${number1}`);
// let isNumber2Empty = (number1 && operator);
// let isNumber2Yet = (operator && number2);

btnOne.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`
    }
});

btnTwo.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnThree.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnFour.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnFive.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnSix.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnSeven.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnEight.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnNine.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnZero.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0" || operator !== "") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

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
    }, 2000);
    if (number1 === "") {
        number1 = Number(display.textContent);
        operator = "+";
        display.textContent = operator;
    } else {
        number2 = Number(display.textContent);
        result = operate(operator, number1, number2)
        number1 = result;
        display.textContent = result;
        operator = "+";
    }
})

btnSubtract.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 2000);
    if (number1 === "") {
        number1 = Number(display.textContent);
        operator = "-";
        display.textContent = operator;
    } else {
        number2 = Number(display.textContent);
        result = operate(operator, number1, number2)
        number1 = result;
        display.textContent = result;
        operator = "-";
    }
})

btnMultiply.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 2000);
    if (number1 === "") {
        number1 = Number(display.textContent);
        operator = "*";
        display.textContent = operator;
    } else {
        number2 = Number(display.textContent);
        result = operate(operator, number1, number2)
        number1 = result;
        display.textContent = result;
        operator = "*";
    }
})

btnDivide.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 2000);
    if (number1 === "") {
        number1 = Number(display.textContent);
        operator = "/";
        display.textContent = operator;
    } else {
        number2 = Number(display.textContent);
        result = operate(operator, number1, number2)
        number1 = result;
        display.textContent = result;
        operator = "/";
    }
})

btnEqual.addEventListener('click', e => {
    e.preventDefault();
    e.target.style.backgroundColor = 'darkblue';
    setTimeout(() => {
        e.target.style.backgroundColor = 'blue';
    }, 2000);
    number2 = Number(display.textContent);
    result = operate(operator, number1, number2)
    number1 = result;
    display.textContent = result;
})