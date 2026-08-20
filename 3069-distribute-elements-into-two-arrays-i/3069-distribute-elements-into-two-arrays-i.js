/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
//     let n=nums.length;
//     let arr1=[]
//     let arr2=[]
//     let result=[]
//     for(let i=1;i<n;i++){
//         nums[1].append(arr1)
//         arr1.push(result)
//     }for(let j=2;j<n;j++){
//         nums[2].append(arr2)
//         arr2.push(result)
//     } if(arr1>arr2)
//     {
//         nums[i].append(arr1)
        
//     }else{
//         arr2
//     }
//     return result;

let arr1 = [nums[0]];
    let arr2 = [nums[1]];
    
   
    for (let i = 2; i < nums.length; i++) {
        let last1 = arr1[arr1.length - 1]; 
        let last2 = arr2[arr2.length - 1]; 
        
        
        if (last1 > last2) {
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }
    
    
    return arr1.concat(arr2);

 };