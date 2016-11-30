/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows < 2) return s;
    let resultArr = [];
    let len = s.length;
    for(let i = 0; i < len;) {
      for(let arrIndex = 0; arrIndex < numRows && i < len; arrIndex++) {
        resultArr[arrIndex] = (resultArr[arrIndex] || '') + s[i++];
      }
      for(let arrIndex = numRows - 2; arrIndex > 0 && i < len; arrIndex--) {
        resultArr[arrIndex] += s[i++];
      }
    }
    return resultArr.reduce((p,c) => p + c, '');
};
