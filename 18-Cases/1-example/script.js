/**
  * Case 1 - Create a program to proces two variables and return the result
  */

const sum = (a, b) => a + b;

const res = (a, b) => a - b;

const mul = (a, b) => a * b;

const div = (a, b) => {
  if (b === 0) {
    return 'Math Error';
  }
  return a / b;
};

module.exports = {
  sum, res, mul, div,
};
