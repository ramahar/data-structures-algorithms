/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = '1';

    for (let i = 2; i <= n; i++) {
      let tempStr = '';
      let count = 0;

      for (let j = 0; j < result.length; j++) {
        let char = result.charAt(j);
        count += 1;

        // 11 -> Two 1's -> 21 
        if (char !== result.charAt(j+1)) {
          tempStr += count + char;
          // Reset count after storing it 
          count = 0;
        }
      }
      result = tempStr;
    }
    return result;
};
