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

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

console.log(powerCalc.calculate("2 * 3")); // 6
console.log(powerCalc.calculate("10 / 2")); // 5