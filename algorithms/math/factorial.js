function factorial(num) {
  let result = 1;
  for (let i = 2; i < num; i++) {
    result *= i;
  }
  return result;
}

function factorialRec(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorialRec(num - 1);
}