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

const operators = document.querySelectorAll(".operators");

const decimalPointButton = document.querySelector("#decimalPoint");

const equalsButton = document.querySelector("#equals");


let fisrtNum;
let operator;
let nextNum;

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate(num1, num2, op){
    if (op == "+") return add (num1,num2);
    if (op == "-") return subtract (num1,num2);    
    if (op == "*") return multiply (num1,num2);
    if (op == "/") {
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
            let result = operate(Number(fisrtNum), Number(nextNum), operator);
            nextNum = null;
            operator = button.textContent;
            initialValue.textContent = button.textContent;
            fisrtNum = result.toFixed(2);
        }
    })
})

equalsButton.addEventListener(("click"), () => {
    let result = operate(Number(fisrtNum), Number(nextNum), operator);
    initialValue.textContent = typeof result == "string" ? result : result.toFixed(2);
    nextNum = null;
    operator = null;
    fisrtNum = result.toFixed(2);
})


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