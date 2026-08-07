/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function(num, t) {
   let temp = BigInt(t);
    let c2 = 0, c3 = 0, c5 = 0, c7 = 0;
    
    while (temp % 2n === 0n) { temp /= 2n; c2++; }
    while (temp % 3n === 0n) { temp /= 3n; c3++; }
    while (temp % 5n === 0n) { temp /= 5n; c5++; }
    while (temp % 7n === 0n) { temp /= 7n; c7++; }

    if (temp > 1n) return "-1";

    const factor = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [2, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 1],
        [3, 0, 0, 0],
        [0, 2, 0, 0]
    ];

    const minDigitsNeeded = (r2, r3, r5, r7) => {
        r2 = Math.max(0, r2);
        r3 = Math.max(0, r3);
        r5 = Math.max(0, r5);
        r7 = Math.max(0, r7);

        let count = r5 + r7;
        let count8 = Math.floor(r2 / 3);
        r2 %= 3;
        let count9 = Math.floor(r3 / 2);
        r3 %= 2;

        if (r2 === 2 && r3 === 1) {
            count += count8 + count9 + 2;
        } else if (r2 === 1 && r3 === 1) {
            count += count8 + count9 + 1;
        } else {
            count += count8 + count9 + (r2 > 0 || r3 > 0 ? 1 : 0);
        }
        return count;
    };

    const n = num.length;
    const pref2 = new Array(n + 1).fill(0);
    const pref3 = new Array(n + 1).fill(0);
    const pref5 = new Array(n + 1).fill(0);
    const pref7 = new Array(n + 1).fill(0);
    const zeroCount = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const d = num.charCodeAt(i) - 48;
        pref2[i + 1] = pref2[i] + factor[d][0];
        pref3[i + 1] = pref3[i] + factor[d][1];
        pref5[i + 1] = pref5[i] + factor[d][2];
        pref7[i + 1] = pref7[i] + factor[d][3];
        zeroCount[i + 1] = zeroCount[i] + (d === 0 ? 1 : 0);
    }

    const fillSuffix = (r2, r3, r5, r7, len) => {
        let suff = "";
        for (let i = 0; i < len; i++) {
            const remLen = len - 1 - i;
            for (let d = 1; d <= 9; d++) {
                const nr2 = r2 - factor[d][0];
                const nr3 = r3 - factor[d][1];
                const nr5 = r5 - factor[d][2];
                const nr7 = r7 - factor[d][3];

                if (minDigitsNeeded(nr2, nr3, nr5, nr7) <= remLen) {
                    suff += d;
                    r2 = nr2; r3 = nr3; r5 = nr5; r7 = nr7;
                    break;
                }
            }
        }
        return suff;
    };

    if (zeroCount[n] === 0) {
        if (minDigitsNeeded(c2 - pref2[n], c3 - pref3[n], c5 - pref5[n], c7 - pref7[n]) === 0) {
            return num;
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        if (zeroCount[i] > 0) continue;

        const startDigit = (num.charCodeAt(i) - 48) + 1;
        for (let d = startDigit; d <= 9; d++) {
            const rem2 = c2 - pref2[i] - factor[d][0];
            const rem3 = c3 - pref3[i] - factor[d][1];
            const rem5 = c5 - pref5[i] - factor[d][2];
            const rem7 = c7 - pref7[i] - factor[d][3];

            if (minDigitsNeeded(rem2, rem3, rem5, rem7) <= n - 1 - i) {
                const prefix = num.substring(0, i) + d;
                const suffix = fillSuffix(rem2, rem3, rem5, rem7, n - 1 - i);
                return prefix + suffix;
            }
        }
    }

    const targetLen = Math.max(n + 1, minDigitsNeeded(c2, c3, c5, c7));
    return fillSuffix(c2, c3, c5, c7, targetLen);
};