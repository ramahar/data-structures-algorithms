// Given a collection of intervals, merge all overlapping intervals
function merge(intervals) {
  if (intervals.length === 0) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  let result = [prev];

  for (let interval of intervals) {
    if (interval[0] <= prev[1]) prev[1] = Math.max(prev[1], interval[1]);
    else {
      result.push(interval);
      prev = interval;
    }
  }
  return result;
}

// Find minimum no. of intervals to remove to make the intervals non-overlapping
function eraseNonOverlapping(intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let prev = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    let next = intervals[i];
    if (next[0] >= prev) {
      count++;
      prev = next[1];
    }
  }
  return intervals.length - count;
}

// Given meeting times, determine if a person could attend all meetings
function canAttend(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    let currStart = intervals[i][0];
    let prevEnd = intervals[i-1][1];
    if (currStart < prevEnd) return false;
  }
  return true;
}