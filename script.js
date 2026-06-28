let displayNum1 = "";
let displayNum2 = "";
let displayOperator = "";
let shouldReset = false;
const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const button = document.querySelectorAll(".button");
const decimal = document.querySelector(".decimal");
const del = document.querySelector(".delete");

function add(num1, num2) {
    if (num1 == ".") {
        num1 = 0;
    }

    if (num2 == ".") {
        num2 = 0;
    }
    return Math.round((Number(num1) + Number(num2)) * 100000) / 100000;
}

function subtract(num1, num2) {
    if (num1 == ".") {
        num1 = 0;
    }

    if (num2 == ".") {
        num2 = 0;
    }
    return Math.round((Number(num1) - Number(num2)) * 100000) / 100000;
}

function multiply(num1, num2) {
    if (num1 == ".") {
        num1 = 0;
    }

    if (num2 == ".") {
        num2 = 0;
    }
    return Math.round((Number(num1) * Number(num2)) * 100000 ) / 100000;
}

function divide(num1, num2) {
    if (num1 == ".") {
        num1 = 0;
    }

    if (num2 == ".") {
        num2 = 0;
    }
    if (num2 != 0) {
        return Math.round((Number(num1) / Number(num2)) * 100000) / 100000;
    } else {
        alert("Don't Do That!");
        return 0;
    }

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

button.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.add("clicked");

        setTimeout(() => {
            item.classList.remove("clicked");
        }, 100);
    })
})

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        if (shouldReset) {
            displayNum1 = "";
            shouldReset = false;
        }
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
        shouldReset = false;
        
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
        displayOperator = "";
        result.textContent = displayNum1;
        shouldReset = true;
    }
});

clear.addEventListener("click", () => {
    displayNum1 = "";
    displayNum2 = "";
    displayOperator = "";
    shouldReset = false;
    result.textContent = displayNum1;
})

decimal.addEventListener("click", () => {
    if (shouldReset) {
            displayNum1 = "";
            shouldReset = false;
        }

    if (displayOperator == "") {
        if (!displayNum1.includes(".")) {
            displayNum1 = displayNum1 + ".";
            result.textContent = displayNum1;
        }
    } else {
        if (!displayNum2.includes(".")) {
            displayNum2 = displayNum2 + ".";
            result.textContent = displayNum2;
        }
    }
});

del.addEventListener("click", () => {
    if (displayOperator == "") {
        displayNum1 = displayNum1.slice(0, -1);
        result.textContent = displayNum1;
    } else if (displayOperator != "" && displayNum2 == "") {
        displayOperator = "";
    } else if (displayOperator != "") {
        displayNum2 = displayNum2.slice(0, -1);
        result.textContent = displayNum2;
    }
});



