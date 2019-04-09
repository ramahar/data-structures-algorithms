function fibonacci(n) {
  let curr = 1; let old = 0; let temp;
  while (n > 0) {
    temp = curr;
    curr = curr + old;
    old = temp;
    n--;
  }
  return old;
}

function fibonacciRec(n) {
  if (n <= 1) return [1];
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}