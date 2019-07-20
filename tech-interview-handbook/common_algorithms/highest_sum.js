// Given array, find the highest sum of 2 numbers
// 2 cases: Element larger than first + element larger than second
function highestSum(arr) {
  let first = arr[0];
  let second = 0;
  for (let index = 1; index < arr.length; index++) {
    const el = arr[index];
    if (el > first) {
      second = first;
      first = el; 
    } else if (el > second) {
      second = el;
    }
  }
  return first + second;
}
console.log(highestSum([7, 0, -4, 5, 2, 3]));
