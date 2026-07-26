/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let n=nums.length;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(nums[i]===nums[i+1]){
            return true
        }
        
    }
     return false;
};