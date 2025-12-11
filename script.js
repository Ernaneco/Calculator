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
let number1 = 0;
let operator = "";
let number2 = 0;

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
