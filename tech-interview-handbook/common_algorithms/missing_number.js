// Find missing number in unsorted array
function missingNumber(arr) {
  let sum = 0;
    let expectedSum = arr.length;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        expectedSum += i;
    }
    
    return expectedSum - sum;
}
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));