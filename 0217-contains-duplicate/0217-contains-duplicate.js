/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let n=nums.length;
    let freq= new Map();
    for(let i=0;i<n;i++){
        if(freq.has(nums[i])){
           return true;
        }
        freq.set(nums[i], true);
    }
    return false
    
};