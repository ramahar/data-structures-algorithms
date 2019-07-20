// Remove duplicates from an array
function removeDuplicates(arr) {
  let set = new Set(arr);
  return Array.from(set);
}
console.log(removeDuplicates([1,2,2,2,4,5]));