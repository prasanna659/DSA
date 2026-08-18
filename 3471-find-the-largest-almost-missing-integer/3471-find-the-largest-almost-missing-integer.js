/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    // let n=nums.length
    // let subarray=[]
    // for(let i=0;i<k;i++){
    //    if(nums[i]<k)
    //    return subarray.push()
    // }

    // let fre=new map()
    // let count={}
    // if(count=1){
    //     return num
    // }
let n = nums.length;
    let counts = {};

    
    for (let i = 0; i <= n - k; i++) {
        
        let uniqueNumbers = new Set(nums.slice(i, i + k));

        
        for (let num of uniqueNumbers) {
            counts[num] = (counts[num] || 0) + 1;
        }
    }

    let largest = -1;

    
    for (let num in counts) {
        if (counts[num] === 1) {
            largest = Math.max(largest, Number(num));
        }
    }

    return largest;
};