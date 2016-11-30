/**
 * @param {string} str
 * @return {number}
 */
 // this question is parsing a single number rather than an expression
 // so '22 + 11' => 22,just like '123dfsdf' => 123
 // so we can use/^\s*[\-\+]?\d+/,this pattern can get legal number of the string's head
 // but in JavaScript, parseInt do the some thing
var myAtoi = function(str) {
  const MAX_NUMBER = 2147483647;
  const MIN_NUMBER = -2147483648;
  let match = str.match(/^\s*[\-\+]?\d+/);
  let integer = match && +match[0] || 0;
  if(integer > MAX_NUMBER) return MAX_NUMBER;
  if(integer < MIN_NUMBER) return MIN_NUMBER;
  return integer;
};
