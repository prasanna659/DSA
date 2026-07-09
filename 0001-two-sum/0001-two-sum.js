/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n=nums.length;
    let map={}

    for(let i=0;i<n;i++){
        complement=target-nums[i];
    
        if(complement in map){
            return [map[complement],i];
        }
    
    map[nums[i]] = i;
    }

    };