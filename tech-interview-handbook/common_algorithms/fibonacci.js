// How to get the nth fibonacci number? Recursive O(2^n)
function fibonacci(n) {
  if (n <= 1) return n; 

  return fibonacci(n-1) + fibonacci(n-2);
}

// Memoized fibonacci. Time Complexity: O(n)
function fib(n) {
  let memo = {};
  if (memo[n]) return memo[n];

  if (n <= 1) return n; 
  memo[n] = fib(n-1) + fib(n-2);
  return memo[n];
}
// console.log(fib(12));