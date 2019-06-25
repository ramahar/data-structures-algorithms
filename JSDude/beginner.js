// Check if a number is prime
function isPrime(num) {
  if (num === 1 || num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true; 
}
// console.log(isPrime(137));

// Find all prime factors of a number 
function primeFactors(num) {
  let result = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}
// console.log(primeFactors(10));

// Find nth fibonacci number
function fibonacci(n) {
  let memo = {};
  if (memo[n]) return memo[n];

  if (n === 0 || n === 1) return n;
  memo[n] = fibonacci(n-1) + fibonacci(n-2);
  return memo[n];
} 
console.log(fibonacci(12));