// You are climbing a staircase of n steps. Each time you can either climb 1 or 2 steps. 
// In how many distinct ways can you climb to the top?
function climbStairs(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n-1) + climbStairs(n-2);
}
console.log(climbStairs(3));