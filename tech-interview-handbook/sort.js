// Implement merge sort O(n log(n))
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor((arr.length)/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  result = result.concat(left, right);
  return result;
}
// console.log(mergeSort([12, 11, 13, 5, 6, 7]));

// Implement quick sort O(n log(n))   Worst case: O(n^2)
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
// console.log(quickSort([12, 11, 13, 5, 6, 7]));

// Implement bubble sort  O(n^2)
function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
        swapped = true;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([12, 11, 13, 5, 6, 7]));

// Implement binary search
function bSearch(nums, target) {
  let start = 0;
  let end = nums.length-1;
  
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) start = mid + 1;
    else if (target < nums[mid]) end = mid - 1;
  }
  return null;
}