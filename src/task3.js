/* eslint-disable */
class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  divide(x, y) {
    if (y === 0) {
      throw new Error("Can't divid over 0");
    } else return x / y;
  }

  multiply(x, y) {
    return x * y;
  }
}

const calculate = new Calculator();

module.exports = calculate;
