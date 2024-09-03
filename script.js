"use strict"

let fisrtNum = "";
let operator = "";
let secondNum = "";

let displayValue = "";

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

const display = document.querySelector("#display");
// display.textContent = "";

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

one.addEventListener(("click"), () => {
    if (display.textContent === "0") {
        return display.textContent = "1"
    }
    return display.textContent += "1";
})

function getNumber(num) {
    num.addEventListener(("click"), (num) => {
        if (display.textContent === "0") {
            return display.textContent = num;
        } else if (display)
        return display.textContent += num;
    })
}

