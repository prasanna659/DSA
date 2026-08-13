/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n=nums.length;
   // sqre=nums[i]**2
    sqre=[]
   for(let i=0;i<n;i++){
    sqre.push(nums[i]**2);
   }
   sqre.sort((a,b)=>a-b)
    
    return sqre
};