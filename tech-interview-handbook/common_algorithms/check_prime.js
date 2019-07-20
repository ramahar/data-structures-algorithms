// Check if a number is prime
function isPrime(n) {
  if (n === 1 || n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true; 
}
// console.log(isPrime(6));