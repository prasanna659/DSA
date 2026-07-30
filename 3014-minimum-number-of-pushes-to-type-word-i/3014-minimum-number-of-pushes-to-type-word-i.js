/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let n = word.length;
    let ans = 0;
    
    for (let i = 0; i < n; i++) {
        ans += Math.floor(i / 8) + 1;
    }
    
    return ans;
};