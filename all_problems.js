// SORT
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor((arr.length)/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  while (left.length || right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left, right);
}
// console.log(mergeSort([1,4,2,3,6]));

function quickSort(arr) {
  if (arr.length <= 1) return arr; 
  let pivot = arr[0];
  let left = [], right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
// console.log(quickSort([1,4,2,3,6]));

function bSearch(arr, target) {
  let start = 0, end = arr.length-1;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (arr[mid] === target) return mid;
    else if (target < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
}
// console.log(bSearch([1,2,4,5], 4))
