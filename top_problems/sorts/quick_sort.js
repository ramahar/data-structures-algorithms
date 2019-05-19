// Divide and Conquer by choosing a pivot
// Time Complexity: Avg Case: O(n log(n))   Worst Case: O(n^2)  Space: O(n)

function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  return quickSort(left).concat(pivot, quickSort(right)); // OR [ ...quickSort(left), pivot, ...quickSort(right) ]
}