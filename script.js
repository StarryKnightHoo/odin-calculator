let displayNum1 = "";
let displayNum2 = "";
let displayOperator = "";
let shouldReset = false;
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const equals = document.querySelector(".equals");

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*" || operator == "×") {
        return multiply(num1, num2)
    } else if (operator == "/" || operator == "÷") {
        return divide(num1, num2)
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
        if (shouldReset) {
            displayNum1 = "";
            shouldReset = false;
        }
        
        if (displayOperator == "") {
            displayOperator = clickedOperator;
        } else {
            if (displayNum2 !== "") {
                displayNum1 = operate(displayOperator, displayNum1, displayNum2);
                displayNum2 = "";
                result.textContent = displayNum1;
            }
            displayOperator = clickedOperator;
        }
    })
})

equals.addEventListener("click", () => {
    if (displayNum2 !== "") {
        displayNum1 = operate(displayOperator, displayNum1, displayNum2);
        displayNum2 = "";
        result.textContent = displayNum1;
        shouldReset = true;
    }
});




