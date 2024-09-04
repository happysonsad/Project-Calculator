"use strict"

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

const clearButton = document.querySelector("#clear");

const initialValue = document.querySelector("#initialValue");

const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");

const decimalPointButton = document.querySelector("#decimalPoint");

const equalsButton = document.querySelector("#equals");


let fisrtNum = "";
let operator = "";
let nextNum = "";

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

function operate () {

}


function getNumber(num) {
    num.addEventListener(("click"), () => {
        if (initialValue.textContent === "0") {
            initialValue.textContent = num.textContent;
        } else
            initialValue.textContent += num.textContent;
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


clearButton.addEventListener(("click"), ()=> {
    initialValue.textContent = 0;
})


decimalPointButton.addEventListener(("click"), ()=> {
    if (initialValue.textContent.includes(".")) {
        
    } else {
        initialValue.textContent += ".";
    }
})