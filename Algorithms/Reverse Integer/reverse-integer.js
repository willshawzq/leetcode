/**
 * @param {number} x
 * @return {number}
 */
 // the int32 range: -2^31 ~ 2^31-1
 // this problem is a little puzzling, you should take overflow into consideration
 // although it's really nothing to JavaScript
 // you should also notice that 1 << 31 (-2147483648) will overflow in JavaScript

 // The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (Math.pow(2, 53) - 1).
 // The MAX_SAFE_INTEGER constant has a value of 9007199254740991. The reasoning behind that number is that JavaScript uses double-precision floating-point format numbers as specified in IEEE 754 and can only safely represent numbers between -(Math.pow(2, 53) - 1) and Math.pow(2, 53) - 1.
var reverse = function(x) {
    const MIN_NUMBER = - (1 << 30) * 2;
    const MAX_NUMBER = (1 << 30) * 2 - 1;
    let isNegative = 1;
    if(x < 0) {
      isNegative = -1;
      x = -x;
    }
    var result = isNegative * (((x + '').split('').reverse().join('')) - 0);
    if(result < MIN_NUMBER || result > MAX_NUMBER) {
      return 0;
    }
    return result;
};
