// Check if a number is prime
function isPrime(num) {
  if (num === 1 || num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true; 
}
// console.log(isPrime(137));
