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
        add(n1, n2);
    } else if (oper === "-") {
        subtract(n1, n2);
    } else if (oper === "*") {
        multiply(n1, n2);
    } else if (oper === "/") {
        divide(n1, n2);
    }
}

// Create variables to buttons
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
// let btnNumber = document.querySelectorAll('.btn-number');
let btnAdd = document.querySelector('#btnAdd');
let btnSubtract = document.querySelector('#btnSubtract');
let btnMultiply = document.querySelector('#btnMultiply');
let btnDivide = document.querySelector('#btnDivide');
let btnEqual = document.querySelector('#btnEqual');

btnOne.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnTwo.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnThree.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnFour.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnFive.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnSix.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnSeven.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnEight.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnNine.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnZero.addEventListener('click', e => {
    e.preventDefault();
    if (display.textContent === "0") {
        display.textContent = `${e.target.textContent}`;
    } else {
        display.textContent += `${e.target.textContent}`;
    }
});

btnClear.addEventListener('click', e => {
    e.preventDefault();
    display.textContent = "0";
    number1 = 0;
    number2 = 0;
    operator = "";
    result = 0;
});

btnAdd.addEventListener('click', e => {
    e.preventDefault();
    number1 = Number(display.textContent);
    console.log(number1);
    display.textContent += "+";
})

btnSubtract.addEventListener('click', e => {
    e.preventDefault();
    number1 = Number(display.textContent);
    console.log(number1);
    display.textContent += "-"; 
})

btnMultiply.addEventListener('click', e => {
    e.preventDefault();
    number1 = Number(display.textContent);
    console.log(number1);
    display.textContent += "*"; 
})

btnDivide.addEventListener('click', e => {
    e.preventDefault();
    number1 = Number(display.textContent);
    console.log(number1);
    display.textContent += "/"; 
})

btnEqual.addEventListener('click', e => {
    e.preventDefault();
    console.log(result);
    display.textContent = `${result}`;
})