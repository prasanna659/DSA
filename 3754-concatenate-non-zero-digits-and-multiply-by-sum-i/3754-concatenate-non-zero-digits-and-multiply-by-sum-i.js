/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {

   if (n === 0) return 0;
    
    let x = 0;
    let sum = 0;
    let multiplier = 1;
    
    while (n > 0) {
        let digit = n % 10;
        if (digit !== 0) {
            sum += digit;
            x = digit * multiplier + x;
            multiplier *= 10;
        }
        n = Math.floor(n / 10);
    }
    
    return x * sum;
};