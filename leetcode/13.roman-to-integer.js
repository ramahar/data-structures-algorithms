/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var result = 0;
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  
  for (var i = 0; i <= decimal.length;i++) {
    while (s.indexOf(roman[i]) === 0){
      // Keep adding decimal while string contains roman number
      result += decimal[i];
      // After adding number, remove roman from string 
      s = s.replace(roman[i],'');
    }
  }
  return result;
};
