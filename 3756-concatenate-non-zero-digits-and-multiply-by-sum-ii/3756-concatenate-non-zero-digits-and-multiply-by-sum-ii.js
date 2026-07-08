/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const MOD = 1000000007n;
    const n = s.length;

    const prefixSum = new Array(n + 1).fill(0n);
    const prefixX = new Array(n + 1).fill(0n);
    const powerOf10 = new Array(n + 1).fill(1n);
    const nonZeroCount = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        powerOf10[i] = (powerOf10[i - 1] * 10n) % MOD;
    }

    for (let i = 0; i < n; i++) {
        const digit = BigInt(s[i]);
        
        if (digit !== 0n) {
            prefixSum[i + 1] = prefixSum[i] + digit;
            prefixX[i + 1] = (prefixX[i] * 10n + digit) % MOD;
            nonZeroCount[i + 1] = nonZeroCount[i] + 1;
        } else {
            prefixSum[i + 1] = prefixSum[i];
            prefixX[i + 1] = prefixX[i];
            nonZeroCount[i + 1] = nonZeroCount[i];
        }
    }

    const ans = [];

    for (let i = 0; i < queries.length; i++) {
        const [l, r] = queries[i];

        const totalNonZerosInRange = nonZeroCount[r + 1] - nonZeroCount[l];

        if (totalNonZerosInRange === 0) {
            ans.push(0);
            continue;
        }

        const currentSum = prefixSum[r + 1] - prefixSum[l];

        let x = (prefixX[r + 1] - (prefixX[l] * powerOf10[totalNonZerosInRange]) % MOD) % MOD;
        if (x < 0n) {
            x += MOD;
        }

        const queryResult = (x * currentSum) % MOD;
        ans.push(Number(queryResult));
    }

    return ans;

};