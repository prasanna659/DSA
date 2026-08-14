/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let maxlength=0;
    let left=0;
    const count = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;

        
        while (count[char] > 2) {
            count[s[left]]--;
            left++;
        }

        maxlength = Math.max(maxlength, right - left + 1);
    }
    return maxlength;
};
   