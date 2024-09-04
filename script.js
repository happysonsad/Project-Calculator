"use strict"

let fisrtNum = "";
let operator = "";
let secondNum = "";

const add = function add(a, b) {
    return a + b;
}

const subtract = function subtract(a, b) {
    return a - b;
}

const multiply = function multiply(a, b) {
    return a * b;
}

const divide = function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    add(a, b)
}

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

// one.addEventListener(("click"), () => {
//     if (display.textContent === "0") {
//         return display.textContent = one.textContent;
//     }
//     return display.textContent += one.textContent;
// })

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


console.log(displayValue)