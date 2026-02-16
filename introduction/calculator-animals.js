class Calculator {
  constructor() {
    this.methods = {};
  }

  addMethod(name, func) {
    this.methods[name] = func;
  }

  calculate(expression) {
    const [a, operator, b] = expression.split(" ");
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (!this.methods[operator] || isNaN(numA) || isNaN(numB)) {
      throw new Error("Invalid expression or operator");
    }

    return this.methods[operator](numA, numB);
  }
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

// Basic math functions
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
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

powerCalc.addMethod("add", add);
powerCalc.addMethod("subtract", subtract);
powerCalc.addMethod("multiply", multiply);
powerCalc.addMethod("divide", divide);

// Function to operate based on the operator
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            throw new Error("Invalid operator");
    }
}

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

console.log(powerCalc.calculate("2 * 3")); // 6
console.log(powerCalc.calculate("10 / 2")); // 5