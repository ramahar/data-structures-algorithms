// Remove duplicates from an array
function removeDuplicates(arr) {
  let unique = {};
  let result = [];
  arr.forEach(el => {
    if (!unique[el]) result.push(el);
    unique[el] = true;
  });
  return result;
}
console.log(removeDuplicates([1,2,2,2,4,5]));

// Alternative using set 
function removeDups(arr) {
  let set = new Set(arr);
  return Array.from(set);
}