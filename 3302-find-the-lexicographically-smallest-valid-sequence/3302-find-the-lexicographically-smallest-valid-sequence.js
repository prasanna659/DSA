/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;

    const last = new Array(m).fill(-1);

    let j = m - 1;
    for (let i = n - 1; i >= 0 && j >= 0; i--) {
        if (word1[i] === word2[j]) {
            last[j] = i;
            j--;
        }
    }

    const result = [];
    let modified = false;
    j = 0;

    for (let i = 0; i < n && j < m; i++) {
        const isMatch = word1[i] === word2[j];
        const canUseChange = !modified && (j === m - 1 || last[j + 1] > i);

        if (isMatch || canUseChange) {
            if (!isMatch) {
                modified = true;
            }
            result.push(i);
            j++;
        }
    }

    return result.length === m ? result : [];
};