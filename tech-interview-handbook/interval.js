// Given a collection of intervals, merge all overlapping intervals
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
var merge = function(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  
  let prev = intervals[0];
  let result = [prev];
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(curr);
      prev = curr;
    }
  }
  return result;
};