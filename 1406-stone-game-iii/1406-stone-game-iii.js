/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
 const n = stoneValue.length;
    let dp1 = 0, dp2 = 0, dp3 = 0; // Represents dp[i+1], dp[i+2], dp[i+3]
    
    for (let i = n - 1; i >= 0; i--) {
        let maxDiff = -Infinity;
        let currentTakenSum = 0;
        
        const nextDp = [dp1, dp2, dp3];
        
        for (let k = 0; k < 3 && i + k < n; k++) {
            currentTakenSum += stoneValue[i + k];
            maxDiff = Math.max(maxDiff, currentTakenSum - nextDp[k]);
        }
        
        // Shift state
        dp3 = dp2;
        dp2 = dp1;
        dp1 = maxDiff;
    }
    
    if (dp1 > 0) return "Alice";
    if (dp1 < 0) return "Bob";
    return "Tie";
};