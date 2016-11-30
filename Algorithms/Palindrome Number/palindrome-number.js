/**
 * @param {number} x
 * @return {boolean}
 */
 // (num | 0) <==> Math.floor
 // x == (x + '').split('').reverse().join('') //too slow
var isPalindrome = function(x) {
  if(x < 0) return false;
  if(x < 10) return true;
  if(x < 100 && x % 11 === 0)  return true;
  if(x % 10 === 0) return false;
  let y = (x % 10) | 0;
  x = (x / 10) | 0;
  while( x > y) {
    y = (y * 10 + x % 10) | 0;
    x = (x / 10) | 0;
  }
  if(y > x) y = (y / 10) | 0;
  return x === y ? true : false;
};
