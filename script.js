let displayNum1 = "";
let displayNum2 = "";
let displayOperator = "";
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const result = document.querySelector(".result");

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

function operate(operator, num1, num2) {
    if (operator == "+") {
        add(num1, num2);
    } else if (operator == "-") {
        subtract(num1, num2);
    } else if (operator == "*") {
        multiply(num1, num2)
    } else if (operator == "/") {
        divide(num1, num2)
    }
}

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        const clickedNumber = button.textContent;
        if (displayOperator == "") {
            displayNum1 = displayNum1 + clickedNumber;
            result.textContent = displayNum1;
        } else {
            displayNum2 = displayNum2 + clickedNumber;
            result.textContent = displayNum2;
        }
    })
})

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        const clickedOperator = button.textContent;
        if (displayOperator == "") {
            displayOperator = clickedOperator;
        } else {
            if (displayNum2 !== "") {
                displayNum1 = operate(displayOperator, displayNum1, displayNum2);
                displayNum2 = "";
            }
            displayOperator = clickedOperator;
        }
    })
})

