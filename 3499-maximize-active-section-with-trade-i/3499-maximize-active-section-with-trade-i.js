/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let totalOnes = 0;
    const blocks = [];
    let currentLen = 0;
    let currentChar = s[0];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') totalOnes++;

        if (s[i] === currentChar) {
            currentLen++;
        } else {
            blocks.push({ char: currentChar, length: currentLen });
            currentChar = s[i];
            currentLen = 1;
        }
    }
    blocks.push({ char: currentChar, length: currentLen });

    let maxDelta = 0;

    for (let i = 1; i < blocks.length - 1; i++) {
        if (blocks[i].char === '1') {
            const candidateDelta = blocks[i - 1].length + blocks[i + 1].length;
            maxDelta = Math.max(maxDelta, candidateDelta);
        }
    }

    return totalOnes + maxDelta;
};