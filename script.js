window.addEventListener('keypress', (e) => {
  console.log(e);
});

//basic math function
add = (a, b) => {
  return a + b;
};

subtract = (a, b) => {
  if (a === '' || b === '') return 0;
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
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      console.log('err');
  }
};
