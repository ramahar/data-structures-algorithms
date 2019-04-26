// Write a method to replace all spaces in a string with '%20'. You may assume 
// that the string has sufficient space at the end to hold the additional 
// characters,and that you are given the "true" length of the string.
function urlify(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += ("%20")
    } else {
      result += (str[i]);
    }
  }
  return result;
}

// O(2n)
// function urlify(str, length) {
//   let result = str.split(" ");
//   result.join("%20");
// }

// console.log(urlify("Mr John Smith"));