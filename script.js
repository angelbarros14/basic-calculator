// initialize the variables
let num1 = 0;
let num2 = 0;
let operator = "";
let currentOperator = "";

// create a function for math operators
const add = (num1, num2) => num1 + num2;
const subtract =  (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const percent = (num1) => num1 / 100;

// 
const operatorFunctions = {
    plus: add,
    minus: subtract,
    times: multiply,
    divide: divide
}

// round the numbers
// if number is not 2, return 1
function operate (operator, num1, num2) {
    if (!num1 && !num2) {
        return;
    }

    if (operator == add) {
        return add(num1, num2);
    } 
    else if (operator == minus) {
        return subtract(num1, num2);
    }
    else if (operator == multiply) {
        return multiply(num1, num2);
    }
    else if (operator == divide) {
        return divide(num1, num2);
    }
}

// button numbers
// add an addeventlistener to the button number
// if the first number is clicked
// display the first button number in input field
// link that first number in the calculations
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn =>  {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerHTML;
        document.querySelector("#result").value += value;
        number = document.querySelector("#result").value;
        })
})

// if the operators are clicked
const operators = document.querySelectorAll(".btnSide")
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        // return the selected button operator to the operate function
        const operatorType = operator.id;
        currentOperator = operatorFunctions[operatorType];
        let number = document.querySelector("#result").value;
        num1 = num1 == 0 ? num1 = number: num2 = number;
        if (num2 != 0) {
            document.querySelector("#result").value = total;
        }



        let total = operate(currentOperator, num1, num2);

        console.log(`${num1} ${operator.id} ${num2} = ${total}`);
        // if num1 = 0, store to num1
        // if num1 !=0, store to num2
        // if num2 = 0, store to num2
        // if num2 !=0, show total



        // if the user clicks equal sign
            // check if the result is calculated, store to first number
            // if the user clicks an operator
            // store the next value in second number


        let result = currentOperator(num1, num2);
    })
})

// if the clear is clicked
const clear = document.querySelector("#clear");
clear.addEventListener("click", (e) => {
    document.querySelector("#result").value = "";
})

// if delete is clicked
const del = document.querySelector("#delete");
del.addEventListener("click", (e) => {
    // remove the last clicked button
})

// if % is clicked



// button operators (+, -, x, /, %)
// add an addeventlistener to the button operator
// if the operator is clicked
    // link the operator in the calculations

// equal button
// add an addeventlistener to the button
// link the function 'operate'
    // if the numbers is not equal to two, return 1
// round the answer with long decimals
// retain the last number to num1
// display the calculated number

// clear button
// add an addeventlistener to the button
// clear the calculations

// delete button
// add an addeventlistener to the button
// delete the last number or operator in the calculations