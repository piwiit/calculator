/* eslint-disable no-console */
const numberButton = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator");
const clearButton = document.querySelector("[data-clear]");
const equalButton = document.querySelector("[data-equal]");
const screen = document.querySelector(".screen");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let haveToReset = false;

const resetscreen = () => {
	screen.textContent = "";
	haveToReset = false;
};

const addNumber = (number) => {
	if (screen.textContent === "0" || haveToReset) resetscreen();
	screen.textContent += number;
};

numberButton.forEach((button) =>
	button.addEventListener("click", () => addNumber(button.textContent))
);

const addOperator = (symbol) => {
	if (haveToReset) resetscreen();
	firstNumber = Number(screen.textContent);
	operator = symbol;
	screen.textContent = symbol;
	haveToReset = true;
};

operatorButton.forEach((button) =>
	button.addEventListener("click", () => addOperator(button.textContent))
);

const clear = () => {
	screen.textContent = "0";
	firstNumber = "";
	secondNumber = "";
	operator = "";
};

window.addEventListener("load", () => clear());
clearButton.addEventListener("click", () => clear());

// basic math function
const add = (a, b) => a + b;

const subtract = (a, b) => {
	if (a === "" || b === "") return 0;
	return a - b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// eslint-disable-next-line consistent-return
const operate = (symbole, a, b) => {
	switch (symbole) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "x":
			return multiply(a, b);
		case "/":
			return divide(a, b);
		default:
			console.log("err");
	}
};
const calculate = () => {
	secondNumber = Number(screen.textContent);
	screen.textContent = operate(operator, firstNumber, secondNumber);
	console.log(operate(operator, firstNumber, secondNumber));
	console.log(`operator: ${operator} && ${typeof operator}`);
	console.log(`firstNumber: ${firstNumber} && ${typeof firstNumber}`);
	console.log(`secondNumber: ${secondNumber} && ${typeof secondNumber}`);
	haveToReset = true;
};
equalButton.addEventListener("click", () => calculate());
