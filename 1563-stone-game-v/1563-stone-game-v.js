/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    const n = stoneValue.length;
    
   
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + stoneValue[i];
    }
    
    const getSum = (l, r) => prefix[r + 1] - prefix[l];

  
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

   
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;

            for (let k = i; k < j; k++) {
                const leftSum = getSum(i, k);
                const rightSum = getSum(k + 1, j);

                if (leftSum < rightSum) {
                    dp[i][j] = Math.max(dp[i][j], leftSum + dp[i][k]);
                } else if (rightSum < leftSum) {
                    dp[i][j] = Math.max(dp[i][j], rightSum + dp[k + 1][j]);
                } else{ {
                   
                    dp[i][j] = Math.max(
                        dp[i][j],
                        leftSum + dp[i][k],
                        rightSum + dp[k + 1][j]
                    );
                }}
            }
        }
    }

    return dp[0][n - 1];
};