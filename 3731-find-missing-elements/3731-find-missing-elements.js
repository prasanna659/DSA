/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
       nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let num = nums[i] + 1; num < nums[i + 1]; num++) {
            result.push(num);
        }
    }

    return result;

};