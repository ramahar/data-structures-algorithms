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
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start >= end) {
      end = intervals[i].end;
      count++;
    }
  }
  return intervals.length - count; 
};
// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));


// ---------------- PRACTICE -------------------
function merge(intervals) {
  if (!intervals.length) return intervals;

  intervals.sort((a,b) => a[0] - b[0]);
  let prev = intervals[0];
  let result = [prev];

  for (let interval of intervals) {
    if (interval[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      result.push(interval);
      prev = interval;
    }
  }
  return result;
}

// Given an array of meeting time intervals consisting of start and end times, determine if a person could attend all meetings
function canAttend(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let currStart = intervals[i][0];
    let prevEnd = intervals[i-1][1];
    if (currStart < prevEnd) return false;
  }
  return true; 
}
// console.log(canAttend([[0,30],[5,10],[15,20]]));
// console.log(canAttend([[7,10],[2,4]]));