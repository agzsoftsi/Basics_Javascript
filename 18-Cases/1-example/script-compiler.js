/**
  * Case 1 - Create a program to proces two variables and return the result
  */
function sum(a, b) {
  document.getElementById('result').innerText = (Number(a) + Number(b));
  return a + b;
};

function res(a, b) {
  document.getElementById('result').innerText = (Number(a) - Number(b));
  return a - b;
};

function mul(a, b) {
  document.getElementById('result').innerText = (Number(a) * Number(b));
  return a * b;
};

function div(a, b) {
  if (b === 0) {
    return 'Math Error';
  }
  document.getElementById('result').innerText = (Number(a) / Number(b));
  return a / b;
};