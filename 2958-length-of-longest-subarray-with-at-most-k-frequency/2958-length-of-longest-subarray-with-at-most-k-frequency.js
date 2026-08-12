/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let freq = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        let val = nums[right];
        freq.set(val, (freq.get(val) || 0) + 1);

        
        while (freq.get(val) > k) {
            let leftVal = nums[left];
            freq.set(leftVal, freq.get(leftVal) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;

    
};