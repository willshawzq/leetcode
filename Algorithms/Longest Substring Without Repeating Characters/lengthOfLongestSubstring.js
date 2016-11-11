/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let tempObj = {};
    for(let i = 0, j = -1, len = s.length; i < len; i++) {
      let char = s[i];
      if(tempObj[char] > j) {
        j = tempObj[char];
      }
      tempObj[char] = i;
      maxLen = Math.max(maxLen, i - j);
    }
    return maxLen;
};
