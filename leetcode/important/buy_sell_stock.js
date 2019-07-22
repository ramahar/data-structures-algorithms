// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Input: [7,1,5,3,6,4] 
// Output: 5
function maxProfit(prices) {
  let min = prices[0];
  let max = 0; 
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(max, prices[i]-min);
  }
  return max; 
}
// console.log(maxProfit([7,1,5,3,6,4]))