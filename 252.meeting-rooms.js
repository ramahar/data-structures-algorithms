// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.
// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
**/
function canAttendMeetings(intervals) {
  // Sort by starting time
  intervals.sort((a,b) => a.start > b.start ? 1 : -1);
  for (let i = 1; i < intervals.length; i++) {
    let prev = intervals[i-1];
    let curr = intervals[i];

    if (prev.end > curr.start) return false;
  }
  return true; 
}
