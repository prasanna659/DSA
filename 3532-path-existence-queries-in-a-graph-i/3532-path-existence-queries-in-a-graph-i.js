/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const answer = [];
    
    for (const [u, v] of queries) {
        
        const start = Math.min(u, v);
        const end = Math.max(u, v);
        
        let isConnected = true;
        
       
        for (let i = start; i < end; i++) {
            if (nums[i + 1] - nums[i] > maxDiff) {
                isConnected = false;
                break; // A gap is too large; path is broken
            }
        }
        
        answer.push(isConnected);
    }
    
    return answer;
};