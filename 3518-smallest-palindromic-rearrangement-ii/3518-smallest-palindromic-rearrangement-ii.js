/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
     const n = s.length;
    const halfLen = Math.floor(n / 2);

    // Frequency of each character
    const freq = new Array(26).fill(0);
    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    let midChar = "";
    const halfFreq = new Array(26).fill(0);

    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 === 1) {
            midChar = String.fromCharCode(97 + i);
        }
        halfFreq[i] = Math.floor(freq[i] / 2);
    }

    const LIMIT = BigInt(k);

    // Compute nCr with early stopping
    function nCr(n, r, limit) {
        if (r > n) return 0n;
        r = Math.min(r, n - r);

        let ans = 1n;
        for (let i = 1; i <= r; i++) {
            ans = ans * BigInt(n - r + i) / BigInt(i);

            if (ans > limit) {
                return limit + 1n;
            }
        }

        return ans;
    }

    // Count distinct permutations of multiset
    function countPermutations(counts, len) {
        let ways = 1n;
        let rem = len;

        for (let i = 0; i < 26; i++) {
            if (counts[i] === 0) continue;

            ways *= nCr(rem, counts[i], LIMIT);

            if (ways > LIMIT) {
                return LIMIT + 1n;
            }

            rem -= counts[i];
        }

        return ways;
    }

    // Check if kth palindrome exists
    if (countPermutations(halfFreq, halfLen) < LIMIT) {
        return "";
    }

    const firstHalf = [];
    let remaining = halfLen;
    let kth = LIMIT;

    for (let pos = 0; pos < halfLen; pos++) {
        for (let c = 0; c < 26; c++) {
            if (halfFreq[c] === 0) continue;

            halfFreq[c]--;

            const cnt = countPermutations(halfFreq, remaining - 1);

            if (cnt >= kth) {
                firstHalf.push(String.fromCharCode(97 + c));
                remaining--;
                break;
            } else {
                kth -= cnt;
                halfFreq[c]++; // backtrack
            }
        }
    }

    const left = firstHalf.join("");
    const right = [...firstHalf].reverse().join("");

    return (n % 2 === 0)
        ? left + right
        : left + midChar + right;
};