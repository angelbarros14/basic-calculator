let num1 = "";
let num2 = "";
let currentOperator = "";
let currentValue = "";

const add = (num1, num2) => num1 + num2;
const subtract =  (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => {
    if (operator == "add") {
        return add(num1, num2);
    } 
    else if (operator == "subtract") {
        return subtract(num1, num2);
    }
    else if (operator == "multiply") {
        return multiply(num1, num2);
    }
    else if (operator == "divide") {
        return divide(num1, num2);
    }
}

const display = document.querySelector("#display");
function updateDisplay () {
    display.value = currentValue;
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn =>  {
    btn.addEventListener("click", (e) => {
        currentValue += e.target.innerHTML;
        updateDisplay();
    })
})

const operators = document.querySelectorAll(".btnSide")
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        
        if (num1 == "") {
            num1 = currentValue;
            currentValue = "";
        }
        console.log(`num1 is ${num1}`);

        if (num1 != "" && num2 == "") {
            num2 = currentValue;
            currentValue = "";
        }
        console.log(`num2 is ${num2}`);
        
        if (num1 != "" && num2 != "") {
            num1 = operate(currentOperator, parseFloat(num1), parseFloat(num2)).toString();
            num2 = "";
            currentValue = num1;
            updateDisplay();
        }

        currentValue = "";
        currentOperator = e.target.id;
    })
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (num1 != "" && num2 != "") {
        num1 = operate(currentOperator, parseFloat(num1), parseFloat(num2)).toString();
        num2 = "";
        currentValue = num1;
        updateDisplay();
    }
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    num1 = ""; 
    num2 = "";
    currentOperator = "";
    currentValue = "";
    updateDisplay();
})

const del = document.querySelector("#delete");
del.addEventListener("click", () => {

})