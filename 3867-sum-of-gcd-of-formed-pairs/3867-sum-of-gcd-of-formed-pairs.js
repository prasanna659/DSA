/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    const n = nums.length;
    const prefixGcd = new Array(n);
    
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    let mxi = nums[0];
    for (let i = 0; i < n; i++) {
        mxi = Math.max(mxi, nums[i]);
        prefixGcd[i] = gcd(nums[i], mxi);
    }
    
    prefixGcd.sort((a, b) => a - b);
    
    let totalSum = 0;
    let left = 0;
    let right = n - 1;
    
    while (left < right) {
        totalSum += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }
    
    return totalSum;
};