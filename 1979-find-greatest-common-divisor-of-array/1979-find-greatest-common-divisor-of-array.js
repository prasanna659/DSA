/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b)=>a-b);
    let minElement = nums[0];
    let maxElement = nums[nums.length - 1];
    for (let i = minElement; i >= 1; i--) {
       
        if (minElement % i === 0 && maxElement % i === 0) {
            return i; 
        }
    }
};