// Time Complexity: O(n log(n))   Space Complexity: O(n)
// Split the array in half at every recursive step: O(log (n))
// Merge helper function: O(n)
function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length/2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift);
    }
  }
  return result.concat(left, right);
}