const numberButton = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator");
const clearButton = document.querySelector("[data-clear]");
const equalButton = document.querySelector("[data-equal]");
const screen = document.querySelector(".screen");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let haveToReset = false;

window.addEventListener("load", () => clear());
clearButton.addEventListener("click", () => clear());
equalButton.addEventListener("click", () => calculate());

numberButton.forEach((button) =>
	button.addEventListener("click", () => addNumber(button.textContent))
);

operatorButton.forEach((button) =>
	button.addEventListener("click", () => addOperator(button.textContent))
);

const addNumber = (number) => {
	if (screen.textContent === "0" || haveToReset) resetscreen();
	screen.textContent += number;
};

const addOperator = (symbol) => {
	if (haveToReset) resetscreen();
	firstNumber = Number(screen.textContent);
	operator = symbol;
	screen.textContent = symbol;
	haveToReset = true;
};

const clear = () => {
	screen.textContent = "0";
	firstNumber = "";
	secondNumber = "";
	operator = "";
};

const resetscreen = () => {
	screen.textContent = "";
	haveToReset = false;
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

//basic math function
add = (a, b) => {
	return a + b;
};

subtract = (a, b) => {
	if (a === "" || b === "") return 0;
	else return a - b;
};

multiply = (a, b) => {
	return a * b;
};

divide = (a, b) => {
	return a / b;
};

operate = (operator, a, b) => {
	switch (operator) {
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
