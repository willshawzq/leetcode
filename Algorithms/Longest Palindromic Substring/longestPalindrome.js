/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;
  if(!len) return '';
  let loopStart = 0;
  let maxSubLen = 1;
  let newSubLen = 0;
  let leftPartStart;
  let rightPartEnd;
  for(let i = 0; i < len;) {
    // if the rest string's length is less than half maxLen,than there is no more longer palindrome
    if(len - i <= maxSubLen / 2) break;
    leftPartStart = i;
    rightPartEnd = i;
    // Skip duplicate characters
    while(rightPartEnd < len - 1 && s[rightPartEnd + 1] === s[rightPartEnd]) {
      rightPartEnd++;
    }
    i = rightPartEnd + 1;
    // check the rightPart and the leftPart is the some,and expand
    while (rightPartEnd < len - 1 && leftPartStart > 0 && s[rightPartEnd + 1] === s[leftPartStart - 1]) {
      rightPartEnd++;
      leftPartStart--;
    }
    newSubLen = rightPartEnd - leftPartStart + 1;
    if(newSubLen > maxSubLen) {
      loopStart = leftPartStart;
      maxSubLen = newSubLen;
    }
  }
  return s.substr(loopStart, maxSubLen);
};
