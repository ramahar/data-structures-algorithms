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

var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0;
  
  intervals.sort((a, b) => a.start - b.start);
  let count = 0;
  let prevEnd = intervals[0].end;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < prevEnd) {
      count++;
      prevEnd = Math.min(prevEnd, intervals[i].end);
    } else {
      prevEnd = intervals[i].end;
    }
  }
  return count; 
};
// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));