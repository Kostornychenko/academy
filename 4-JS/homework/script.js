"use strict";
var result;
var operation = prompt("Enter operation: +, -, *, /", "+");
var first = prompt("Enter first operand", "10");
var second = prompt("Enter second operand", "5");

if (operation === "+") {
    result = +first + +second;
} else if (operation === "-") {
    result = +first - +second;
} else if (operation === "*") {
    result = +first * +second;
} else if (operation === "/") {
    result = +first / +second;
} else {
    result = "error";
}

alert("Result: " + result);