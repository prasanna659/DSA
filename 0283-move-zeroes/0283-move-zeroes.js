/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   // return nums.map(nums[left],nums[right])
  let n=nums.length;
    let nonzero=0
    for(let i=0;i<n;i++){
     if(nums[i]!==0){
//         let temp=nums[nonzero]
//         nums[nonzero]=nums[i]
//         nums[i]=temp
//          nonzero++
//     }
    
    
   
   
  
//    }
   [nums[nonzero],nums[i]]=  [nums[i],nums[nonzero]];
   nonzero++
    }
    }
};