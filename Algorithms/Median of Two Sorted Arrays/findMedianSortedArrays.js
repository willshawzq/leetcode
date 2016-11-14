/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    if(len1 > len2) {
      [nums2, nums1, len2, len1] = [nums1, nums2, len1, len2];
    }
    let iMin = 0;
    let iMax = len1;
    let median = Math.ceil((len1 + len2) / 2);
    let maxOfLift = 0;
    let minOfRight = 0;
    while(iMin <= iMax) {
      let i = Math.ceil((iMin + iMax) / 2);
      let j = median - i;
      if(i < len2 && nums2[j - 1] > nums1[i]) {
        iMin = i + 1;
      }else if(i > 0 && nums1[i - 1] > nums2[j]) {
        iMax = i - 1;
      }else {
        if(i == 0) {
          maxOfLift = nums2[j-1];
        }else if(j == 0) {
          maxOfLift = nums1[i - 1];
        }else {
          maxOfLift = Math.max(nums1[i - 1], nums2[j - 1]);
        }
        if((len1 + len2) % 2 == 1) {
          return maxOfLift;
        }
        if(i == len1) {
          minOfRight = nums2[j];
        }else if(j == len2) {
          minOfRight = nums1[i];
        }else {
          minOfRight = Math.min(nums1[i], nums2[j]);
        }
        return (maxOfLift + minOfRight)  / 2;
      }
    }
};
