/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    const maxVal = Math.max(...nums);
    
    // Step 1: Count frequency of each number
    const count = new Array(maxVal + 1).fill(0);
    for (const num of nums) {
        count[num]++;
    }
    
    // Step 2: Count how many elements are multiples of each i
    const multiplesCount = new Array(maxVal + 1).fill(0);
    for (let i = 1; i <= maxVal; i++) {
        for (let j = i; j <= maxVal; j += i) {
            multiplesCount[i] += count[j];
        }
    }
    
    // Step 3: Compute exact pair counts for each GCD using inclusion-exclusion
    const gcdPairs = new Array(maxVal + 1).fill(0);
    for (let i = maxVal; i >= 1; i--) {
        const totalMultiples = multiplesCount[i];
        // Total pairs that share 'i' or a multiple of 'i' as a common divisor
        let pairs = (totalMultiples * (totalMultiples - 1)) / 2;
        
        // Subtract pairs that have a strictly larger GCD (multiples of i)
        for (let j = 2 * i; j <= maxVal; j += i) {
            pairs -= gcdPairs[j];
        }
        gcdPairs[i] = pairs;
    }
    
    // Step 4: Compute prefix sums of the GCD pair counts
    const prefixSums = new Array(maxVal + 1).fill(0);
    for (let i = 1; i <= maxVal; i++) {
        prefixSums[i] = prefixSums[i - 1] + gcdPairs[i];
    }
    
    // Step 5: Answer each query using binary search
    const answer = [];
    for (const q of queries) {
        let low = 1, high = maxVal;
        let res = maxVal;
        
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (prefixSums[mid] > q) {
                res = mid;
                high = mid - 1; // Try to find a smaller valid GCD
            } else {
                low = mid + 1;
            }
        }
        answer.push(res);
    }
    
    return answer;
};