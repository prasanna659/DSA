/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;
    const pairXor = new Uint8Array(2048);
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            pairXor[nums[i] ^ nums[j]] = 1;
        }
    }
    
    const uniqueNums = Array.from(new Set(nums));
    const tripletXor = new Uint8Array(2048);
    
    for (let p = 0; p < 2048; p++) {
        if (pairXor[p] === 1) {
            for (let k = 0; k < uniqueNums.length; k++) {
                tripletXor[p ^ uniqueNums[k]] = 1;
            }
        }
    }
    
    let count = 0;
    for (let i = 0; i < 2048; i++) {
        if (tripletXor[i] === 1) {
            count++;
        }
    }
    
    return count;
};