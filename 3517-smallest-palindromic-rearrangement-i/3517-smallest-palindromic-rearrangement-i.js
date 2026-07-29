/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
   const n = s.length;
    const halfLen = Math.floor(n / 2);
    
    // Take the first half of the string and sort its characters alphabetically
    const firstHalfSorted = s.slice(0, halfLen).split('').sort().join('');
    
    // Middle character (if string length is odd)
    const mid = n % 2 !== 0 ? s[halfLen] : '';
    
    // Reverse the sorted first half to get the second half
    const secondHalf = firstHalfSorted.split('').reverse().join('');
    
    return firstHalfSorted + mid + secondHalf;

};