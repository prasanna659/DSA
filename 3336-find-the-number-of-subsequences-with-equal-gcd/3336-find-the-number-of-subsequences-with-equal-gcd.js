/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1e9 + 7;
    let maxVal = 0;
    for (const num of nums) {
        if (num > maxVal) maxVal = num;
    }

    let dp = Array.from({ length: maxVal + 1 }, () => new Array(maxVal + 1).fill(0));
    dp[0][0] = 1;

    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    for (const x of nums) {
        let nextDp = Array.from({ length: maxVal + 1 }, () => new Array(maxVal + 1).fill(0));
        
        for (let g1 = 0; g1 <= maxVal; g1++) {
            for (let g2 = 0; g2 <= maxVal; g2++) {
                if (dp[g1][g2] === 0) continue;
                
                let count = dp[g1][g2];

                nextDp[g1][g2] = (nextDp[g1][g2] + count) % MOD;

                let ng1 = g1 === 0 ? x : gcd(g1, x);
                nextDp[ng1][g2] = (nextDp[ng1][g2] + count) % MOD;

                let ng2 = g2 === 0 ? x : gcd(g2, x);
                nextDp[g1][ng2] = (nextDp[g1][ng2] + count) % MOD;
            }
        }
        dp = nextDp;
    }

    let ans = 0;
    for (let g = 1; g <= maxVal; g++) {
        ans = (ans + dp[g][g]) % MOD;
    }

    return ans;
};