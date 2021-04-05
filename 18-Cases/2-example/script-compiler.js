/**
  * Case 1 - Create a program to proces two variables and return the result
  */
// eslint-disable-next-line no-unused-vars
function sum(a, b) {
  document.getElementById('result').innerText = (Number(a) + Number(b));
  return a + b;
}
// eslint-disable-next-line no-unused-vars
function res(a, b) {
  document.getElementById('result').innerText = (Number(a) - Number(b));
  return a - b;
}
// eslint-disable-next-line no-unused-vars
function mul(a, b) {
  document.getElementById('result').innerText = (Number(a) * Number(b));
  return a * b;
}

// eslint-disable-next-line no-unused-vars
function div(a, b) {
  if (b === 0) {
    return 'Math Error';
  }
  document.getElementById('result').innerText = (Number(a) / Number(b));
  return a / b;
}
