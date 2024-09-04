"use strict"

const numbersButton = document.querySelectorAll(".numbers");

const clearButton = document.querySelector("#clear");

const initialValue = document.querySelector("#initialValue");

const operators = document.querySelectorAll(".operators");

const decimalPointButton = document.querySelector("#decimalPoint");

const equalsButton = document.querySelector("#equals");


let firstNum;
let operator;
let nextNum;

function add (a, b){
    return a + b;
}
function subtract (a, b){
    return a - b;
}
function multiply (a, b){
    return a * b;
}
function divide (a, b){
    return a / b;
}

numbersButton.forEach((button) => {
    button.addEventListener(("click"), () => {
        if (!operator) {
            if (!firstNum) {
                firstNum = button.textContent;
            } else {
            firstNum += button.textContent;
            }
            initialValue.textContent = firstNum;
        } else {
            if (!nextNum) {
                nextNum = button.textContent;
            } else {
                nextNum += button.textContent;
            }
            initialValue.textContent = nextNum;
        }
    })
})


function operate(num1, num2, op){
    if (op == "+") return add (num1, num2);
    if (op == "–") return subtract (num1, num2);    
    if (op == "×") return multiply (num1, num2);
    if (op == "÷") {
        if (num2 == 0) {return "Error"}
        return divide(num1,num2);
    }
}

operators.forEach(button => {
    button.addEventListener(("click"), () => {
        if ((!operator) || (!nextNum)) {
            operator = button.textContent;
            initialValue.textContent = operator;
        } else {
            let result = operate(Number(firstNum), Number(nextNum), operator);
            nextNum = null;
            operator = button.textContent;
            initialValue.textContent = button.textContent;
            firstNum = result.toFixed(2);
        }
    })
})

equalsButton.addEventListener("click", () => {
    let result = operate(Number(firstNum), Number(nextNum), operator);
    initialValue.textContent = typeof result == "string" ? result : result.toFixed(2);
    nextNum = null;
    operator = null;
    firstNum = result.toFixed(2);
})


decimalPointButton.addEventListener(("click"), ()=> {
    if (initialValue.textContent.includes(".")) {
        
    } else {
        initialValue.textContent += ".";
    }
})

clearButton.addEventListener(("click"), ()=> {
    firstNum = null;
    operator = null;
    nextNum = null;
    initialValue.textContent = null;
    initialValue.textContent = 0;
})