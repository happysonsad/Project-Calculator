"use strict"

let numOne = "";
let operator = "";
let numTwo = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(numOne, numTwo, operator) {
    
};

let displayValue = 0;
const display = document.querySelector("#display");
display.textContent = displayValue;

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

function getNumber(num) {
    num.addEventListener(("click"), () => {
        if (display.textContent === "0") {
            displayValue = num.textContent;
            return display.textContent = num.textContent;
        } else
            displayValue += num.textContent;
            return display.textContent += num.textContent;
    })
}
getNumber(zero);
getNumber(one);
getNumber(two);
getNumber(three);
getNumber(four);
getNumber(five);
getNumber(six);
getNumber(seven);
getNumber(eight);
getNumber(nine);


const clear = document.querySelector("#clear")
function clearNumber(button) {
    button.addEventListener(("click"), () => {
        display.textContent = 0;
        displayValue = 0;
    })
}
clearNumber(clear);


function runMethod(button) {
    button.addEventListener(("click"), (e) => {

    })
}

const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");



// .reduce
